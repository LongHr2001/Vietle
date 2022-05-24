import * as React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './guessSquareStyle.js'

function GuessSquare({wordLength, letter, accuracy, dark, accessible}) {
	const squareStyles = [styles.guessSquare];
	const letterStyles = [styles.letter];
	
	const squareSize = wordLength > 5 ? (200 / wordLength) : 40;
	const letterFontSize = wordLength > 5 ? (100 / wordLength) : 20;
	const margin = wordLength > 6 ? (30 / wordLength) : 5;
	
	squareStyles.push({width: squareSize, height: squareSize, margin: margin});
	letterStyles.push({fontSize: letterFontSize});
	
	
	if (dark) {
		letterStyles.push(styles.guessLetter);
	}
	
	if (accuracy === '1') {
		squareStyles.push(accessible ? styles.guessCorrectAccessible : styles.guessCorrect);
		letterStyles.push(styles.guessLetter);
	} else if (accuracy === '2') {
		squareStyles.push(accessible ? styles.guessInWordAccessible : styles.guessInWord);
		letterStyles.push(styles.guessLetter);
	} else if (accuracy === '3') {
		squareStyles.push(styles.guessNotInWord);
		letterStyles.push(styles.guessLetter);
	}
	
  return (
	<View style={squareStyles}>
		<Text style={letterStyles}>{letter}</Text>
	</View>
  );
}

export default GuessSquare;