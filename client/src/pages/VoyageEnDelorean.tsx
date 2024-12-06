import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface destination {
	id: number;
	name: string;
	description: string;
	sound: string;
	image: string;
}

function VoyageEnDelorean() {
	const [destinations, setDestinations] = useState<destination[]>([]);
	const [destinationVtemporel, setDestinationVtemporel] = useState<
		destination[]
	>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDestinations = async () => {
			try {
				// Récupération de toutes les destinations
				const response = await fetch("http://localhost:3310/api/destinations");
				const data = await response.json();
				setDestinations(data);

				// Récupération des destinations temporels
				const responseVtemporel = await fetch(
					"http://localhost:3310/api/destinations/?categorie=temporel",
				);
				const temporelData = await responseVtemporel.json();
				setDestinationVtemporel(temporelData);
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
					<h2>Voyages temporels</h2>
					{destinationVtemporel.length > 0 ? (
						destinationVtemporel.map((destination) => (
							<figure key={destination.id}>
								<h3>{destination.name}</h3>
								<div className="neon-border">
								<img src={destination.image} alt="pouetpouet" />
								</div>
								<p>{destination.description}</p>
							</figure>
						))
					) : (
						<p>C'est la pause café, reviens dans deux heures</p>
					)}
				</div>
			)}
		</>
	);
}

export default VoyageEnDelorean;
