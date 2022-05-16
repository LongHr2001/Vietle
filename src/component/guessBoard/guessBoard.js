import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './guessBoardStyle.js'

import GuessSquare from './guessSquare/guessSquare.js'

function GuessRow({wordLength, guess}: {wordLength: int, guess: string}) {
	const letters = guess.split("");
	
	return (
		<View style={styles.guessRow}>
			{Array(wordLength).fill(1).map((e, i) =>
				<GuessSquare key={i} letter={letters[i]}/>
			)}
		</View>
	);
}


function GuessBoard({wordLength, tries, guesses}: {wordLength: int, tries: int, guesses: string[]}) {
	return (
		<View>
			{Array(tries).fill(1).map((e, i) =>
				<GuessRow key={i} wordLength={wordLength} guess={guesses[i]}/>
			)}
		</View>
	);
}

export default GuessBoard;