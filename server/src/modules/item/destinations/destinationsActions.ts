const destinations = [
  {
    id: 1,
    name: "Tatooine",
    categorie: "Voyage interstellaire",
    description: "Tatooine est une magnifique planète couverte de sable.",
    sound: "http://localhost:3310/assets/images/StarWars-CantinaSong",
    image: "http://localhost:3310/assets/images/Tatooine_coucher_de_soleil.jpg",
  },
  {
    id: 2,
    name: "Cratère de volcan",
    categorie: "Voyage insolite",
    description: "Un endroit pour être bien au chaud et confortable",
    sound: "http://localhost:3310/assets/images/volcan.mp3",
    image: "http://localhost:3310/assets/images/Montagne_du_Destin_1.jpg",
  },
  {
    id: 3,
    name: "Antiquité",
    categorie: "Voyage temporelle",
    description: "Nom de Zeus!",
    sound: "http://localhost:3310/assets/images/tonnerre.ogg",
    image: "http://localhost:3310/assets/images/Voyage-dans-le-temps.jpg",
  },
  {
    id: 4,
    name: "Tataouine-sur-Mer",
    categorie: "Voyage insolite",
    description: "Non ce n'est pas en Tunisie",
    sound: "http://localhost:3310/assets/images/vague.mp3",
    image: "http://localhost:3310/assets/images/Tataouine_plage.jpg",
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  if (req.query.categorie != null) {
    const filteredDestinations = destinations.filter((destination) =>
      destination.categorie.includes(req.query.categorie as string)
    );

    console.log(req.query.categorie);
    res.json(filteredDestinations);
  } else {
    res.json(destinations);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  console.log(parsedId);

  const destination = destinations.find((d) => d.id === parsedId);

  if (destination != null) {
    res.json(destination);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
