import Home from "./src/pages/Home";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
	<NavigationContainer>
		<Routes></Routes>
	</NavigationContainer>
  );
}