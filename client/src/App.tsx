import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderDesDestinationsDeMerde from "./components/HeaderDesDestinationsDeMerde";

function App() {
	return (
		<>
			<header>
				<HeaderDesDestinationsDeMerde />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
