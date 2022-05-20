import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import KEYBOARD_KEYS from '../../component/keyboard/keyboardKeys.js';
import GameScreenRenderer from './gameScreenRenderer.js'

import styles from './gameScreenStyle.js';

function GameScreen({ navigation }) {
	const CORRECT_WORD = "HELLO";
	const DICTIONARY = ["HELLO", "RALLY", "SUGAR", "RIGHT", "CRANE", "QUEEN", "HORNY"];
	
	const [wordLength, setWordLength] = React.useState(CORRECT_WORD.length);
	const [guessIndex, setGuessIndex] = React.useState(0);
	
	const [tries, setTries] = React.useState(wordLength + 1);

	const [guesses, setguesses] = React.useState(Array(tries).fill(""));
	
	const [accuracy, setAccuracy] = React.useState(Array(tries).fill("00000"));
	
	const [keyboard, setKeyboard] = React.useState(KEYBOARD_KEYS);
	
	const handleKey = (letter: string) => {
		if (letter == "XÓA") {
			let temp = [...guesses];
			temp[guessIndex] = temp[guessIndex].slice(0, -1);
			setguesses(temp);
		}
		else if (letter == "NHẬP") {
			if (guessIndex < tries - 1) {
				if (guesses[guessIndex].length < wordLength) {
					alert("Chưa đủ kí tự!");
				} else if (guesses[guessIndex].length == wordLength) {
					if (DICTIONARY.includes(guesses[guessIndex])) {
						let tempAccuracy = accuracy;
						
						let temp = "";
						
						let tempKeyboard = [...keyboard];
	
						guesses[guessIndex].split("").map((guessLetter, i) => {
							if (CORRECT_WORD.includes(guessLetter) && CORRECT_WORD[i] === guessLetter) {
								temp += "1";
								tempKeyboard[tempKeyboard.findIndex(e => e.label == guessLetter)].accuracy = 1;
							} else if (CORRECT_WORD.includes(guessLetter)) {
								temp += '2';
								tempKeyboard[tempKeyboard.findIndex(e => e.label == guessLetter)].accuracy = 2;
							} else {
								temp += '3';
								tempKeyboard[tempKeyboard.findIndex(e => e.label == guessLetter)].accuracy = 3;
							}	
						})
						tempAccuracy[guessIndex] = temp;
						
						setAccuracy(tempAccuracy);
						
						setKeyboard(tempKeyboard);
						
						if (accuracy[guessIndex] === '11111') {
							alert("Chính xác!");
							navigation.navigate('Win');
						} else {
							setGuessIndex(guessIndex + 1);
						}
						
					} else {
						alert("Không phải từ hợp lệ!");
					}
				}
			} else {
				alert("Từ chính xác là:" + CORRECT_WORD);
				navigation.navigate('Win');
			}
		}
		else if (guesses[guessIndex].length < wordLength) {
			let temp = [...guesses];
			temp[guessIndex] += letter;
			setguesses(temp);
		}
	};
	
	return (
		<GameScreenRenderer
		navigation={navigation}
		wordLength={wordLength}
		guesses={guesses}
		accuracy={accuracy}
		handleKey={handleKey}
		keyboard={keyboard}
		/>
	);
}

export default GameScreen;