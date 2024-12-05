import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface destination {
  id: number;
  name: string;
  category: string;
  description: string;
  sound: string;
  image: string;
}

function Home() {
  const [destinations, setDestination] = useState<destination[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  const random = Math.floor(Math.random() * destinations.length);
  return (
    <>
      <nav>
        <label>
          <select value={""}>
            <option value="">Choisissez votre destination</option>
            {destinations.map((destination) => (
              <option value={destination.category} key={destination.id}>
                {destination.category}
              </option>
            ))}
          </select>
        </label>
      </nav>
      <section className="StarAligned">
        {destinations.length === 0 ? (
          <Loader />
        ) : (
          <figure>
            <h2>{destinations[random].name}</h2>
            <p>{destinations[random].description}</p>
          </figure>
        )}
      </section>
    </>
  );
}

export default Home;
