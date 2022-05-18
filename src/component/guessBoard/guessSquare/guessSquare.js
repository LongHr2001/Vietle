import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './guessSquareStyle.js'

function GuessSquare({letter, accuracy}: {letter: string, accuracy: string}) {
	const squareStyles = [styles.guessSquare];
	const letterStyles = [styles.letter];
	
	if (accuracy === '1') {
		squareStyles.push(styles.guessCorrect);
		letterStyles.push(styles.guessLetter);
	} else if (accuracy === '2') {
		squareStyles.push(styles.guessInWord);
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