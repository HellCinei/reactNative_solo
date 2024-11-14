import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: '15%',
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},

	titulo: {
		alignSelf: "flex-start",
		marginHorizontal: '5%',
		fontSize: 25,
	},
	
	privacy: {
		color: '#999',
		alignSelf: "flex-start",
		marginHorizontal: '5%',
		marginVertical: 20,
		fontSize: 14
	},

	login: {
		width: '100%',
		alignItems: "center",
	},

	estilotexto: {
		fontSize: 25,
		color: 'white',
	},

	divisor: {
		marginVertical: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},

	textDiv: {
		color: '#555',
		fontSize: 15,
	},

	linha: {
		width: '40%',
		height: 1,
		backgroundColor: '#555',
	},

	botao: {
		flexDirection: "row",
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 25,
		height: 50,
		width: '90%',
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#09f',
	},

	botaoTexto: {
		color: '#09f',
		fontSize: 15,
		marginLeft: 30,
		textAlign: "center",
	},

	botaoIcone: {
		position: "relative",
		marginHorizontal: 30 
		
	},

	info: {
		alignSelf: "flex-start",
		marginHorizontal: '5%',
		marginVertical: 10,
		fontSize: 13
	},

	link: {
		color: '#09f',
	},
});

export default styles;