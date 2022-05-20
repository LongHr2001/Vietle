import * as React from 'react';
import { View, Text, Button } from 'react-native';

import Key from './key/key.js'

import styles from './keyboardStyle.js'

function KeyboardRow({keyLabels, onPress, accuracy, dark, accessible}){
	
	return (
		<View style={styles.keyboardRow}>
			{keyLabels.map((letter, i) => (
				<Key
				key={i}
				keyLabel={letter}
				onPress={onPress}
				accuracy={accuracy[i]}
				dark={dark}
				accessible={accessible} />
			))}
		</View>
	);
}

function Keyboard({onPress, keyboard, dark, accessible}) {
	
	const row1 = keyboard.slice(0, 9);
	const row2 = keyboard.slice(9, 16);
	const row3 = keyboard.slice(16, 24);
	
	const row1Label = row1.map(o => o.label);
	const row2Label = row2.map(o => o.label);
	const row3Label = row3.map(o => o.label);
	
	const row1Accuracy = row1.map(o => o.accuracy);
	const row2Accuracy = row2.map(o => o.accuracy);
	const row3Accuracy = row3.map(o => o.accuracy);
	
	return (
		<View style={styles.keyboard}>
			<KeyboardRow keyLabels={row1Label} accuracy={row1Accuracy} onPress={onPress} dark={dark} accessible={accessible} />
			<KeyboardRow keyLabels={row2Label} accuracy={row2Accuracy} onPress={onPress} dark={dark} accessible={accessible} />
			<KeyboardRow keyLabels={row3Label} accuracy={row3Accuracy} onPress={onPress} dark={dark} accessible={accessible} />
		</View>
	);
}

export default Keyboard;