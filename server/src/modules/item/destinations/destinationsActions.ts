const destinations = [
  {
    id: 1,
    name: "Tatooine",
    categorie: "Voyage interstellaire",
    description: "Tatooine est une magnifique planète couverte de sable.",
    sound: "http://localhost:3310/assets/images/StarWars-CantinaSong.mp3",
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
  {
    id: 5,
    name: "Préhistoire",
    categorie: "Voyage temporelle",
    description: "J'ai dépensé sans compter!",
    sound: "http://localhost:3310/assets/images/trex.mp3",
    image: "http://localhost:3310/assets/images/prehistoire.jpg",
  },
  {
    id: 6,
    name: "Crocuscamp-sur-Mer",
    categorie: "Voyage insolite",
    description: "Non ce n'est pas en Tunisie",
    sound: "http://localhost:3310/assets/images/rire.mp3",
    image: "http://localhost:3310/assets/images/Crocuscamp.jpg",
  },
  {
    id: 7,
    name: "Coruscant",
    categorie: "Voyage interstellaire",
    description: "Coruscant est une magnifique planète couverte de rien du tout.",
    sound: "http://localhost:3310/assets/images/coruscant.mp3",
    image: "http://localhost:3310/assets/images/Coruscant.jpg",
  },
  {
    id: 8,
    name: "Naboo",
    categorie: "Voyage interstellaire",
    description: "nabout est une magnifique planète couverte de nabots.",
    sound: "http://localhost:3310/assets/images/naboo.mp3",
    image: "http://localhost:3310/assets/images/planete-naboo.jpg",
  },
  {
    id: 9,
    name: "Alderaan",
    categorie: "Voyage interstellaire",
    description: "Alderaan est une magnifique planète qu'on Aldore.",
    sound: "http://localhost:3310/assets/images/Alderan.ogg",
    image: "http://localhost:3310/assets/images/Aderan.jpg",
  },
  {
    id: 10,
    name: "Hoth",
    categorie: "Voyage interstellaire",
    description: "Hoth est une magnifique planète couverte de glace. Nous déclinons toutes responsabilités si vous rencontrez des wampas durant une excursion.",
    sound: "http://localhost:3310/assets/images/hurlementdedouleur.mp3",
    image: "http://localhost:3310/assets/images/hoth.jpg",
  },
  {
    id: 11,
    name: "Egypte",
    categorie: "Voyage temporelle",
    description: "J'ai dépensé sans compter!",
    sound: "http://localhost:3310/assets/images/trex.mp3",
    image: "http://localhost:3310/assets/images/prehistoire.jpg",
  },
  {
    id: 12,
    name: "Stargateland",
    categorie: "Voyage insolite",
    description: "Non ce n'est pas en Tunisie",
    sound: "http://localhost:3310/assets/images/stargate.mp3",
    image: "http://localhost:3310/assets/images/stargatefun.jpg",
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
