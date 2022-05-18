import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	guessSquare: {
		borderColor: "#d3d6da",
		borderWidth: 2,
		width: 40,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	
	letter: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#878a8c",
	},
	
	guessLetter: {
		color: "#ffffff",
	},
	
	guessCorrect: {
		backgroundColor: "#6aaa64",
		borderColor: "#6aaa64",
    },
  
	guessInWord: {
		backgroundColor: "#c9b458",
		borderColor: "#c9b458",
	},
	guessNotInWord: {
		backgroundColor: "#787c7e",
		borderColor: "#787c7e",
	},
});