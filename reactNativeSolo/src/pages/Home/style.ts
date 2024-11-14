import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		zIndex: 10,
		width: "100%",
		top: 40,
		position: "absolute",
	},

	postagem: {
		top: 100,
		marginBottom: 150,
		width: "100%",
	},
	
	navBar: {
		width: "100%",
		bottom: 0,
		position: "absolute",
	},
});
