import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Maison from "../assets/videos/MaisonDesVoyagesDeMerde.mp4"

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
    <div className="je_danse_le_mia">
      <video className="laisse_pas_trainer_ton_fils" autoPlay muted loop>
				<source src={Maison} />
			</video>
    <div className="content"></div>
      <nav>
        <label>
          <select value={""} onChange={(e) => handleChange(e.target.value)}>
            <option value="">Choisissez votre destination</option>

            <option
              value="serieux-faut-vraiment-donner-une-url-a-toutes-les-pages"
              key="1"
            >
              Voyage interstellaire
            </option>
            <option value="jai-oublie-de-fermer-le-frigo-ce-matin" key="2">
              Voyage insolite
            </option>
            <option value="merde-et-dire-que-cest-pas-la-derniere-page" key="3">
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
            <div className="neon-border">
              <img
                src={destinations[random].image}
                alt={destinations[random].name}
              />
            </div>
          </figure>
        )}
      </section>
    </div>
  );
}

export default Home;
