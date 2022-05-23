import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import KEYBOARD_KEYS from '../../component/keyboard/keyboardKeys.js';
import GameScreenRenderer from './gameScreenRenderer.js'
import { GameCompleteContext } from '../../util/gameComplete.js';
import { StatisticContext } from '../../data/playerStatistic.js';

import styles from './gameScreenStyle.js';

function checkIfCorrect(s: string) {
	for (let i = 1; i < s.length; i++) {
		if (s[i] != '1') return false;
	}
	
	return true;
}

function hardModeCheck(s1: string, s2: string) {
	return true;
}

const CORRECT_WORD = "HELLO";
const DICTIONARY = ["HELLO", "RALLY", "SUGAR", "RIGHT", "CRANE", "QUEEN", "HORNY", "HELLOEEE", "LOVELIVE", "HELLHOLE"];

function GameScreen({ navigation }) {
	
	const {gameComplete, setGameComplete} = React.useContext(GameCompleteContext);
	const {playerData, setPlayerData} = React.useContext(StatisticContext);
	
	const [wordLength, setWordLength] = React.useState(CORRECT_WORD.length);
	const [guessIndex, setGuessIndex] = React.useState(0);
	
	const [tries, setTries] = React.useState(wordLength + 1);

	const [guesses, setGuesses] = React.useState(Array(tries).fill(""));
	
	const [accuracy, setAccuracy] = React.useState(Array(tries).fill("00000"));
	
	const [keyboard, setKeyboard] = React.useState(KEYBOARD_KEYS);
	
	React.useEffect(() => {
		if (!gameComplete) {
			KEYBOARD_KEYS.map(letter => letter.accuracy = 0);
			setWordLength(CORRECT_WORD.length);
			setGuessIndex(0);
			setTries(wordLength + 1);
			setGuesses(Array(tries).fill(""));
			setAccuracy(Array(tries).fill("00000"));

			setKeyboard(KEYBOARD_KEYS);
		}
	}, [gameComplete])
	
	const handleKey = (letter: string) => {
		if (letter == "XÓA") {
			let temp = [...guesses];
			temp[guessIndex] = temp[guessIndex].slice(0, -1);
			setGuesses(temp);
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
						
						if (checkIfCorrect(accuracy[guessIndex])) {
							alert("Chính xác!");
							
							let temp = {...playerData};
							temp.datasets[0].data[guessIndex] += 1;
							temp.totalWins += 1;
							temp.winStreak += 1;
							temp.gameCount += 1;
							temp.winRatio = temp.totalWins / temp.gameCount;
							
							setPlayerData(temp);
							
							setGameComplete(true);
							navigation.navigate('Win', {win: true, accuracy: accuracy, guessIndex: guessIndex, wordLength: wordLength});
						} else {
							setGuessIndex(guessIndex + 1);
						}
						
					} else {
						alert("Không phải từ hợp lệ!");
					}
				}
			} else {
				alert("Từ chính xác là:" + CORRECT_WORD);
				
				let temp = {...playerData};
				temp.winStreak = 0;
				temp.gameCount += 1;
				temp.winRatio = temp.totalWins / temp.gameCount;
				
				setPlayerData(temp);
				
				setGameComplete(true);
				navigation.navigate('Win', {win: false, accuracy: accuracy, guessIndex: guessIndex, wordLength: wordLength});
			}
		}
		else if (guesses[guessIndex].length < wordLength) {
			let temp = [...guesses];
			temp[guessIndex] += letter;
			setGuesses(temp);
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