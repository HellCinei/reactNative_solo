import { StatusBar } from "expo-status-bar";
import Routers from "./src/routes";

export default function App() {
	return (
		<> 
			<StatusBar style="dark" />
			<Routers/>
		</>
	);
}
