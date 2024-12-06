import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface destination {
  id: number;
  name: string;
  description: string;
  sound: string;
  image: string;
}

function FecthExemple() {
  const [destinations, setDestination] = useState<destination[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  });

  const [destinationInterstellaire, setDestinationParCategorie] = useState<
    destination[] | []
  >([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/destinations/?categorie=interstellaire")
      .then((res) => res.json())
      .then((data) => setDestinationParCategorie(data));
  });
  return (
    <>
      <div>
        {destinations.length === 0 ? (
          <Loader />
        ) : (
          destinations.map((destination) => (
            <figure key={destination.id}>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
            </figure>
          ))
        )}
      </div>
      <h2>{destinationInterstellaire[0].name}</h2>
    </>
  );
}

export default FecthExemple;
