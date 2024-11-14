import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flexDirection: "row",
		height: 60,
		width: "100%",
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		alignItems: "center",
		justifyContent: "space-around",
	},

	menu: {
		position: "absolute",
		left: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},

	icone: {
		margin: 10,
	},

	titulo: {
		fontSize: 20,
		fontWeight: "bold",
		color: "orangered",
	},

	perfil: {
		position: "absolute",
		right: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},

	perfilFrame: {
		margin: 10,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "#999",
		alignItems: "center",
		justifyContent: "flex-end",
	},

	perfilImg: {
		alignSelf: "center",
		height: 45,
		width: 45,
	},
});
