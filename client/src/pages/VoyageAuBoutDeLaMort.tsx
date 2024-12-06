import { useEffect, useState } from "react";
import Loader from "../components/Loader";

interface destination {
	id: number;
	name: string;
	description: string;
	sound: string;
	image: string;
}

function VoyageAuBoutDeLaMort() {
	const [destinations, setDestinations] = useState<destination[]>([]);
	const [destinationInsolite, setDestinationInsolite] = useState<destination[]>(
		[],
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDestinations = async () => {
			try {
				// Récupération de toutes les destinations
				const response = await fetch("http://localhost:3310/api/destinations");
				const data = await response.json();
				setDestinations(data);

				// Récupération des destinations insolites
				const responseInsolite = await fetch(
					"http://localhost:3310/api/destinations/?categorie=insolite",
				);
				const insoliteData = await responseInsolite.json();
				setDestinationInsolite(insoliteData);
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
					<h2>Voyages insolites</h2>
					{destinationInsolite.length > 0 ? (
						destinationInsolite.map((destination) => (
							<figure key={destination.id}>
								<h3>{destination.name}</h3>
								<div className="neon-border">
								<img src={destination.image} alt="pouetpouet" />
								</div>
								<p>{destination.description}</p>
							</figure>
						))
					) : (
						<p>Aucune destination insolite disponible.</p>
					)}
				</div>
			)}
		</>
	);
}
export default VoyageAuBoutDeLaMort;
