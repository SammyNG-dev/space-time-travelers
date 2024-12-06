const destinations = [
	{
		id: 1,
		name: "Tatooine",
		categorie: "Voyage interstellaire",
		description:
			"Tatooine est une magnifique planète couverte de sable. Profitez d'un air pur. Nous déclinons toutes altercations avec les jawas. Par sécurité vous pouvez souscrire à notre service de sécurité pour une poignée de wipiupi.",
		sound: "http://localhost:3310/assets/images/StarWars-CantinaSong.mp3",
		image: "http://localhost:3310/assets/images/Tatooine_coucher_de_soleil.jpg",
	},
	{
		id: 2,
		name: "Cratère de volcan",
		categorie: "Voyage insolite",
		description:
			"Un endroit pour être bien au chaud et confortable. Barbecue party offert pour toute souscription avant l'été.",
		sound: "http://localhost:3310/assets/images/volcan.mp3",
		image: "http://localhost:3310/assets/images/Montagne_du_Destin_1.jpg",
	},
	{
		id: 3,
		name: "Antiquité",
		categorie: "Voyage temporelle",
		description: "Nom de Zeus!",
		sound: "http://localhost:3310/assets/images/tonnerre.ogg",
		image: "http://localhost:3310/assets/images/zeus.jpeg",
	},
	{
		id: 4,
		name: "Tataouine-sur-Mer",
		categorie: "Voyage insolite",
		description: "Non ce n'est pas en Tunisie.",
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
		description: "Notre équipe de G.O. vous attend avec force...",
		sound: "http://localhost:3310/assets/images/rire.mp3",
		image: "http://localhost:3310/assets/images/Crocuscamp.jpg",
	},
	{
		id: 7,
		name: "Coruscant",
		categorie: "Voyage interstellaire",
		description:
			"Coruscant est une magnifique planète couverte de rien du tout.",
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
		description: "Alderaan est une magnifique planète qu'on aldore.",
		sound: "http://localhost:3310/assets/images/Alderan.ogg",
		image: "http://localhost:3310/assets/images/Alderan.jpg",
	},
	{
		id: 10,
		name: "Hoth",
		categorie: "Voyage interstellaire",
		description:
			"Hoth est une magnifique planète couverte de glace. Nous déclinons toutes responsabilités si vous rencontrez des wampas durant votre excursion.",
		sound: "http://localhost:3310/assets/images/hurlementdedouleur.mp3",
		image: "http://localhost:3310/assets/images/hoth.jpg",
	},
	{
		id: 11,
		name: "Egypte",
		categorie: "Voyage temporelle",
		description: "Pyramide et balades sur le Nil.",
		sound: "http://localhost:3310/assets/images/trex.mp3",
		image: "http://localhost:3310/assets/images/pyramide.jpg",
	},
	{
		id: 12,
		name: "Stargateland",
		categorie: "Voyage insolite",
		description:
			"Nous déclinons toutes pertes d'éléments au cours de la téléportation. Nous avons un client dont nous tairons le nom, qui a perdu ses cheveux, l'effet est irrémédiable.",
		sound: "http://localhost:3310/assets/images/stargate.mp3",
		image: "http://localhost:3310/assets/images/stargatefun.jpg",
	},
	{
		id: 13,
		name: "Backtothefuture",
		categorie: "Voyage insolite",
		description: "Rupture du continuum espace-temps, Nom de Zeus, Gigawatt...",
		sound: "http://localhost:3310/assets/images/nomdezeus.mp3",
		image: "http://localhost:3310/assets/images/backtofuture.jpg",
	},
];

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
	if (req.query.categorie != null) {
		const filteredDestinations = destinations.filter((destination) =>
			destination.categorie.includes(req.query.categorie as string),
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
