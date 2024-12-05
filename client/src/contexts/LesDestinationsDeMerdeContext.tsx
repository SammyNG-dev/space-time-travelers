import { createContext, useContext, useEffect, useState } from "react";

// vas-y la flemme de typer, c'est tekllement chiant !

const LesDestinationsMeMerdeContext = createContext(null);

export const LesDestinationsDeMerdeProvider = (children) => {
	const [destinationsDeMerde, setDestinationsDeMerde] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3310/api/destinations")
			.then((res) => res.json())
			.then((data) => setDestinationsDeMerde(data));
	});

	return (
		<LesDestinationsMeMerdeContext.Provider value={destinationsDeMerde}>
			{children}
		</LesDestinationsMeMerdeContext.Provider>
	);
};

export const useLesDestinationsDeMerde = () => {
	const gPaEnviDeDonnerUnNomACetteVariable = useContext(LesDestinationsMeMerdeContext);
	if (gPaEnviDeDonnerUnNomACetteVariable === null) {
		throw new Error(
			"Espèce d'imbécile, tu dois utiliser useLesDestinationsDeMerde dans un <LesDestinationsDeMerdeProvider",
		);
	}

	return value;
};
