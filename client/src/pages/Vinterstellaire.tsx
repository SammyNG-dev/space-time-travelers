import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface Destination {
  id: number;
  name: string;
  description: string;
  sound: string;
  image: string;
}

function Vinterstellaire() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [destinationInterstellaire, setDestinationInterstellaire] = useState<Destination[]>([]);
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
          "http://localhost:3310/api/destinations/?categorie=Voyage-interstellaire"
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Destinations</h1>
          {destinations.map((destination) => (
            <figure key={destination.id}>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </figure>
          ))}

          <h2>Voyages interstellaires</h2>
          {destinationInterstellaire.length > 0 ? (
            destinationInterstellaire.map((destination) => (
              <figure key={destination.id}>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </figure>
            ))
          ) : (
            <p>Aucune destination interstellaire disponible.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Vinterstellaire;
