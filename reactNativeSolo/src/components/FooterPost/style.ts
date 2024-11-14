import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	footerPost: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},

	votos: {
		alignItems: "center",
		flexDirection: "row",
		height: 30,
		width: 110,
		borderRadius: 15,
		borderColor: "#ddd",
		borderWidth: 1,
	},
	
	up: {
		width: "65%",
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#ddd",
		borderRightWidth: 1,
	},

	icone: {
		marginHorizontal: 5,
	},

	comentarios: {
		marginLeft: 20,
		height: 30,
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#ddd",
	},

	comentariosValor: {
		marginHorizontal: 5,
	},

	recompensas: {
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
		right: 0,
	},

	award: {
		height: 30,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#ddd",
	},

	share: {
		margin: 5,
		height: 30,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#ddd",
		flexDirection: "row",
		alignItems: "center",
	},

	textShare: {
		marginRight: 10,
	},
})