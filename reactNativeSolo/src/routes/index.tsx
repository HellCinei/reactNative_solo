import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRouters from "./StackRouters";

export default function Routers() {
	return (
		<NavigationContainer>
			<StackRouters />
		</NavigationContainer>
	);
}
