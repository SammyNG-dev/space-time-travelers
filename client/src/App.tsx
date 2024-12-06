import "./App.css";
import "./components/Header.css";
import "./components/footer.css";

import { Outlet } from "react-router-dom";
import HeaderDesDestinationsDeMerde from "./components/HeaderDesDestinationsDeMerde";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<header>
				<HeaderDesDestinationsDeMerde />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
