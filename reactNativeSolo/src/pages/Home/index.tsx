import React from "react";
import { View } from "react-native";
import { HeaderHome } from "../../components/HeaderHome";
import { NavBar } from "../../components/NavBar";
import { styles } from "./style";
import Postagem from "../../components/Postagem";

export function Home() {
	return (
		<View style={styles.container}>

			<View style={styles.header}>
				<HeaderHome />
			</View>

			<View style={styles.postagem}>
				<Postagem/>
			</View>

			<View style={styles.navBar}>
				<NavBar />
			</View>

		</View>
	);
}
