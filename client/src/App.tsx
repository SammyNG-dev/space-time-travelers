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
				
			</main>
			<Outlet />
		</>
	);
}

export default App;
