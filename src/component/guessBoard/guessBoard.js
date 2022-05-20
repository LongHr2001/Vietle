import * as React from 'react';
import { View } from 'react-native';
import styles from './guessBoardStyle.js'

import GuessSquare from './guessSquare/guessSquare.js'

function GuessRow({wordLength, guess, accuracy, dark, accessible}) {
	const letters = guess.split("");
	
	return (
		<View style={styles.guessRow}>
			{Array(wordLength).fill(1).map((e, i) =>
				<GuessSquare
				key={i}
				letter={letters[i]}
				accuracy={accuracy[i]}
				dark={dark}
				accessible={accessible} />
			)}
		</View>
	);
}


function GuessBoard({wordLength, guesses, accuracy, dark, accessible}) {
	return (
		<View>
			{guesses.map((guess, i) => 
				<GuessRow
				key={i}
				wordLength={wordLength}
				guess={guess}
				accuracy={accuracy[i]}
				dark={dark}
				accessible={accessible} />
			)}
		</View>
	);
}

export default GuessBoard;