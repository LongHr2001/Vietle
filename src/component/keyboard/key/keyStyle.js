import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	key: {
		backgroundColor: "#d3d6da",
		padding: 10,
		margin: 3,
		borderRadius: 5,
	},
	
	keyDark: {
		backgroundColor: "#818384",
	},
	
	keyLetter: {
		fontWeight: "500",
		fontSize: 15,
	},
	
	guessedKeyLetter: {
		color: "#ffffff",
	},
	
	keyCorrect: {
		backgroundColor: "#6aaa64",
    },
	
	keyCorrectAccessible: {
		backgroundColor: "#85C0F9",
    },
  
	keyInWord: {
		backgroundColor: "#c9b458",
	},
	
	keyInWordAccessible: {
		backgroundColor: "#F5793A",
	},
	
	keyNotInWord: {
		backgroundColor: "#787c7e",
	},
	
	keyNotInWordDark: {
		backgroundColor: "#3a3a3c",
	},
});