import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";

interface destination {
  id: number;
  name: string;
  description: string;
  sound: string;
  image: string;
}

function VoyageEnDelorean() {
  const [destinations, setDestinations] = useState<destination[]>([]);
  const [destinationVtemporel, setDestinationVtemporel] = useState<
    destination[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Récupération de toutes les destinations
        const response = await fetch("http://localhost:3310/api/destinations");
        const data = await response.json();
        setDestinations(data);

        // Récupération des destinations temporels
        const responseVtemporel = await fetch(
          "http://localhost:3310/api/destinations/?categorie=temporel"
        );
        const temporelData = await responseVtemporel.json();
        setDestinationVtemporel(temporelData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [play, setPlay] = useState(false);

  const createAudio = (sound: string) => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        // Si le son est en pause, on le lance
        audioRef.current.src = sound; // Changer la source du son
        audioRef.current.play(); // Démarrer la lecture
        setPlay(true);
      } else {
        // Si le son est déjà en train de jouer, on le met en pause
        audioRef.current.pause();
        setPlay(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2>Voyages temporels</h2>
          {destinationVtemporel.length > 0 ? (
            destinationVtemporel.map((destination) => (
              <figure key={destination.id}>
                <h3>{destination.name}</h3>
                <img src={destination.image} alt="pouetpouet" />
                <p>{destination.description}</p>
                <button
                  type="button"
                  onClick={() => createAudio(destination.sound)}
                >
                  {play ? "Pause" : "Play the audio"}
                </button>
                <audio ref={audioRef} className="clip" />
              </figure>
            ))
          ) : (
            <p>C'est la pause café, reviens dans deux heures</p>
          )}
        </div>
      )}
    </>
  );
}

export default VoyageEnDelorean;
