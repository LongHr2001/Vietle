import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './guessSquareStyle.js'

function GuessSquare({letter}: {letter: string}) {
  return (
	<View style={styles.guessSquare}>
		<Text style={styles.guessLetter}>{letter}</Text>
	</View>
  );
}

export default GuessSquare;