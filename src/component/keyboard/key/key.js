import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './keyStyle.js'

function Key({keyLabel, accuracy, onPress, dark, accessible}) {
	const keyStyles = [styles.key];
	const letterStyles = [styles.keyLetter];

	if (dark) {
		letterStyles.push(styles.guessedKeyLetter);
		keyStyles.push(styles.keyDark);
	}
	
	if (accuracy === 1) {
		keyStyles.push(accessible ? styles.keyCorrectAccessible : styles.keyCorrect);
		letterStyles.push(styles.guessedKeyLetter);
	} else if (accuracy === 2) {
		keyStyles.push(accessible ? styles.keyInWordAccessible : styles.keyInWord);
		letterStyles.push(styles.guessedKeyLetter);
	} else if (accuracy === 3) {
		keyStyles.push(dark ? styles.keyNotInWordDark : styles.keyNotInWord);
		letterStyles.push(styles.guessedKeyLetter);
	}
	
  return (
	<TouchableOpacity onPress={() => onPress(keyLabel)}>
	<View style={keyStyles}>
		<Text style={letterStyles}>{keyLabel}</Text>
	</View>
	</TouchableOpacity>
  );
}

export default Key;