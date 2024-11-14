import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	cardPost: {
		marginTop: 10,
		width: "100%",
		borderBottomWidth: 1,
		borderColor: "#ddd",
	},
	container: {
		borderColor: "#ddd",
		alignSelf: "center",
		width: "90%",
	},

	perfilPost: {
		flexDirection: "row",
		alignItems: "center",
	},
	
	perfilImg: {
		backgroundColor: "#ddd",
		borderRadius: 20,
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "#999",
		height: 40,
		width: 40,
	},
	
	nome: {
		fontWeight: "bold",
		fontSize: 17,
		margin: 5,
	},
	
	hora: {
		fontSize: 15,
		color: "#777",
	},

	txtPost: {
		marginVertical: 5,
		fontSize: 15,
		color: "#444",
	},

	imgPost: {
		height: 375,
		maxWidth: "100%",
		resizeMode: "cover",
		borderRadius: 15,
		marginVertical: 15,
		borderWidth: 1,
	},

});
