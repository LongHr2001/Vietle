import * as React from 'react';
import { View, Text, Button } from 'react-native';

import Key from './key/key.js'

import styles from './keyboardStyle.js'

function KeyboardRow({keyLabels, onPress}: {keyLabels: string[], onPress: (letter: string) => void}) {
	return (
		<View style={styles.keyboardRow}>
			{keyLabels.map((letter, i) => (
				<Key key={i} keyLabel={letter} onPress={onPress} />
			))}
		</View>
	);
}

function Keyboard({onPress}) {
	const row1 = ["Q", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const row2 = ["A", "S", "D", "G", "H", "K", "L"];
	const row3 = ["NHẬP", "X", "C", "V", "B", "N", "M", "XÓA"];
	
	return (
		<View style={styles.keyboard}>
			<KeyboardRow keyLabels={row1} onPress={onPress} />
			<KeyboardRow keyLabels={row2} onPress={onPress} />
			<KeyboardRow keyLabels={row3} onPress={onPress} />
		</View>
	);
}

export default Keyboard;