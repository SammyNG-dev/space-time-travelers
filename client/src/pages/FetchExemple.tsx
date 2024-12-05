import { useEffect, useState } from "react";

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
  return (
    <>
      <div>
        {destinations.map((destination) => (
          <figure key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </figure>
        ))}
      </div>
    </>
  );
}

export default FecthExemple;
