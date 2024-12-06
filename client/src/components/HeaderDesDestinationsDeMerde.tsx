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
            </ul> 
			Oui c'est du code commenté, t'as un problème ?*/}
      <div className="vas_maintenant_va_faire_le_selecteur_de_cette_classe_bon_courage">
        <img
          id="logoheader"
          src="src/assets/images/logo_desktop.png"
          alt="c'est pas du toc"
        />
      </div>
      <nav>
        {/* C'est Matthieu qui offre les croissants demain */}
        <Link to="/">Home Travels</Link>
        <Link to="/serieux-faut-vraiment-donner-une-url-a-toutes-les-pages">
          L'amour brille sous les étoiles
        </Link>
        <Link to="/merde-et-dire-que-cest-pas-la-derniere-page">
          Le Magicien du Temps
        </Link>
        {/* Merde, mes commentaires sont vraiments partis sur GitHub ? */}
        <Link to="/jai-oublie-de-fermer-le-frigo-ce-matin">
          T'as pas peur de la mort ?
        </Link>
        <Link to="/terre-brulee-au-vent-des-landes-de-pierres-autour-des-lacs-cest-pour-les-vivants-un-peu-denfer-le-conemarra">
          Balec
        </Link>
      </nav>
    </div>
  );
}

export default HeaderDesDestinationsDeMerde;
