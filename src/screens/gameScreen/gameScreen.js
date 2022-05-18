import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GuessBoard from '../../component/guessBoard/guessBoard.js'
import Keyboard from '../../component/keyboard/keyboard.js'
import styles from './gameScreenStyle.js'

function GameScreen({ navigation }) {
	const CORRECT_WORD = "HELLO";
	const DICTIONARY = ["HELLO", "RALLY", "SUGAR", "RIGHT", "CRANE"];
	
	const [wordLength, setWordLength] = React.useState(CORRECT_WORD.length);
	const [guessIndex, setGuessIndex] = React.useState(0);
	
	const [tries, setTries] = React.useState(wordLength + 1);

	const [guesses, setguesses] = React.useState(Array(tries).fill(""));
	const [key, setKey] = React.useState(0);
	
	const [accuracy, setAccuracy] = React.useState(Array(tries).fill("00000"));
	
	const handleKey = (letter: string) => {
		if (letter == "XÓA") {
			let temp = guesses;
			temp[guessIndex] = temp[guessIndex].slice(0, -1);
			setguesses(temp);
			
			setKey(key + 1);
		}
		else if (letter == "NHẬP") {
			if (guessIndex < tries - 1) {
				if (guesses[guessIndex].length < wordLength) {
					alert("Chưa đủ kí tự!");
				} else if (guesses[guessIndex].length == wordLength) {
					if (DICTIONARY.includes(guesses[guessIndex])) {
						let tempAccuracy = accuracy;
						
						let temp = "";
	
						guesses[guessIndex].split("").map((guessLetter, i) => {
							if (CORRECT_WORD.includes(guessLetter) && CORRECT_WORD[i] === guessLetter) {
								temp += "1";
							} else if (CORRECT_WORD.includes(guessLetter)) {
								temp += '2'
							} 
							else {
								temp += '3';
							}	
						})
						tempAccuracy[guessIndex] = temp;
						
						setAccuracy(tempAccuracy);
						console.log(accuracy);
						if (accuracy[guessIndex] === '11111') {
							alert("Chính xác!");
							setKey(key + 1);
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
			let temp = guesses;
			temp[guessIndex] += letter;
			setguesses(temp);
		
			setKey(key + 1);
		}
	}
	
  return (
	<View style={{flex: 1, flexDirection: 'column'}}>
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
			<View style={{}}>
				<TouchableOpacity onPress={() => navigation.navigate('Help')} >
					<Image style={styles.icon} source={require('../../../assets/help_icon.png')} />
				</TouchableOpacity>
			</View>
		
			<View style={{flex: 8, alignItems: 'center'}}>
				<Image style={styles.logo} source={require('../../../assets/logo.png')} />
			</View>
			
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => navigation.navigate('Stat')} >
					<Image style={styles.icon} source={require('../../../assets/stat_icon.png')} />
				</TouchableOpacity>
				
				<TouchableOpacity onPress={() => navigation.navigate('Setting')} >
					<Image style={styles.icon} source={require('../../../assets/setting_icon.png')} />
				</TouchableOpacity>
			</View>
		</View>
		
		<View style={{flex: 7, alignItems: 'center'}}>
			<GuessBoard wordLength={wordLength} guesses={guesses} accuracy={accuracy} key={key} />
		</View>
		
		<View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
			<Keyboard onPress={handleKey}/>
		</View>
	</View>
  );
}

export default GameScreen;