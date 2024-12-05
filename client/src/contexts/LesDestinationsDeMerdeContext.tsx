import { createContext, useContext, useEffect, useState } from "react";

// vas-y la flemme de typer, c'est tellement chiant !

const LesDestinationsMeMerdeContext = createContext(null);

// C'est pas demain la veille que je re-typerai quelque chose sur ce projet, profites-en bien !
export const LesDestinationsDeMerdeProvider = ({children}:{children:React.ReactNode}) => {
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
	const gPaEnviDeDonnerUnNomACetteConstante = useContext(LesDestinationsMeMerdeContext);
	if (gPaEnviDeDonnerUnNomACetteConstante === null) {
		throw new Error(
			"Espèce d'imbécile, tu dois utiliser useLesDestinationsDeMerde dans un <LesDestinationsDeMerdeProvider",
		);
	}

	return gPaEnviDeDonnerUnNomACetteConstante;
};
