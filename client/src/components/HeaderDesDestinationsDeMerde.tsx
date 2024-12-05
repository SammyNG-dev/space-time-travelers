import { Link } from "react-router-dom";

function HeaderDesDestinationsDeMerde() {

	return (

		<div className="la_flemme">
            {/* <ul>
                <h2>Liste de courses à faire</h2>
                <li>Du pain</li>
                <li>Du vin</li>
                <li>De la charcuterie</li>
                <li>Du fromage</li>
            </ul> */}
			<img
				src=""
				alt="Mais putain c'est pas de ma faute si l'image ne s'affiche pas ! Si t'es aveugle c'est pas de ma faute non plus !"
			/>
			<nav>
				<Link to="/la-maison-faut-la-nettoyer">Home Shit Travels</Link>
				<Link to="/serieux-faut-vraiment-donner-une-url-a-toutes-les-pages">
					L'amour brille sous les étoiles
				</Link>
				<Link to="merde-et-dire-que-cest-pas--la-derniere-page">
					Le Magicien du Temps
				</Link>
				<Link to="/jai-oublie-de-fermer-le-frigo-ce-matin">T'as pas peur de la mort ?</Link>
			</nav>
		</div>
	);
}

export default HeaderDesDestinationsDeMerde;
