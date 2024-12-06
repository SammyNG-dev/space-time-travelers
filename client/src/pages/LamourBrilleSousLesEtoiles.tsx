import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Etoile from "../assets/videos/LamourBrilleSousLesEtoiles.mp4"

interface destination {
  id: number;
  name: string;
  description: string;
  sound: string;
  image: string;
}

function LamourBrilleSousLesEtoiles() {
  const [destinations, setDestinations] = useState<destination[]>([]);
  const [destinationInterstellaire, setDestinationInterstellaire] = useState<
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

        // Récupération des destinations interstellaires
        const responseInterstellaire = await fetch(
          "http://localhost:3310/api/destinations/?categorie=interstellaire"
        );
        const interstellaireData = await responseInterstellaire.json();
        setDestinationInterstellaire(interstellaireData);
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
    <div>
      <video className="laisse_pas_trainer_ton_fils" autoPlay muted loop>
				<source src={Etoile} />
			</video>

      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2>Voyages interstellaires</h2>
          {destinationInterstellaire.length > 0 ? (
            destinationInterstellaire.map((destination) => (
              <figure key={destination.id}>
                <h3>{destination.name}</h3>
                <div className="neon-border">
                  <img src={destination.image} alt="pouetpouet" />
                </div>
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
            <p>Aucune destination interstellaire disponible.</p>
          )}
        </div>
      )}
      </div>
  );
}

export default LamourBrilleSousLesEtoiles;