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

  const handleChange = (e: string) => {
    window.location.href = `/${e}`;
  };

  const random = Math.floor(Math.random() * destinations.length);
  return (
    <>
      <nav>
        <label>
          <select value={""} onChange={(e) => handleChange(e.target.value)}>
            <option value="">Choisissez votre destination</option>

            <option value="Vinterstellaire" key="1">
              Voyage interstellaire
            </option>
            <option value="Vinsolite" key="2">
              Voyage insolite
            </option>
            <option value="Vintemporelle" key="2">
              Voyage temporel
            </option>
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
