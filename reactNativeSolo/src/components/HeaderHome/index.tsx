import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { styles } from "./style";
import imgPerfil from "../../assets/imagePerfil/Tartaglia.png";
import { useNavigation } from "@react-navigation/native";

export function HeaderHome() {
	const navigate = useNavigation();

	const goLogin = () => {
		navigate.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<View style={styles.menu}>
				<Icon style={styles.icone} name="menu" type="ionicon" size={30} />
				<Text style={styles.titulo}>reddit</Text>
				<Icon name="menu-down" type="material-community" size={30} />
			</View>
			<View style={styles.perfil}>
				<Icon style={styles.icone} name="search" type="feather" size={25} />
				<Icon style={styles.icone} name="translate" type="material-icon" size={25} />
				<TouchableOpacity onPress={goLogin} style={styles.perfilFrame}>
					<Image style={styles.perfilImg} source={imgPerfil}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
