const destinations = [
  {
    id: 1,
    name: "Tatooine",
    description: "Tatooine est une magnifique planète couverte de sable.",
    sound: "snd.txt",
    image: "img.txt",
  },
  {
    id: 2,
    name: "Cratère de volcan",
    description: "Un endroit pour être bien au chaud et confortable",
    sound: "snd.txt",
    image: "img.txt",
  },
  {
    id: 3,
    name: "Antiquité",
    description: "Nom de Zeus!",
    sound: "snd.txt",
    image: "img.txt",
  },
  {
    id: 4,
    name: "Tataouine-sur-Mer",
    description: "Non ce n'est pas en Tunisie",
    sound: "snd.txt",
    image: "img.txt",
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  if (req.query.q != null) {
    const filteredDestinations = destinations.filter((destination) =>
      destination.name.includes(req.query.q as string)
    );

    res.json(filteredDestinations);
  } else {
    res.json(destinations);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const destination = destinations.find((d) => d.id === parsedId);

  if (destination != null) {
    res.json(destination);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
