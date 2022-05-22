import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	guessSquare: {
		borderColor: "#d3d6da",
		borderWidth: 2,
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	
	letter: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000000",
	},
	
	guessLetter: {
		color: "#ffffff",
	},
	
	guessCorrect: {
		backgroundColor: "#6aaa64",
		borderColor: "#6aaa64",
    },
	
	guessCorrectAccessible: {
		backgroundColor: "#85C0F9",
		borderColor: "#85C0F9",
    },
  
	guessInWord: {
		backgroundColor: "#c9b458",
		borderColor: "#c9b458",
	},
	
	guessInWordAccessible: {
		backgroundColor: "#F5793A",
		borderColor: "#F5793A",
	},
	
	guessNotInWord: {
		backgroundColor: "#787c7e",
		borderColor: "#787c7e",
	},
});