import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GuessBoard from '../../component/guessBoard/guessBoard.js'
import Keyboard from '../../component/keyboard/keyboard.js'
import styles from './gameScreenStyle.js'

const CORRECT_WORD = "HELLO";

function GameScreen({ navigation }) {
	const [wordLength, setWordLength] = React.useState(0);
	const [tries, setTries] = React.useState(0);
	const [guessIndex, setGuessIndex] = React.useState(0);
	
	const onPress = (letter: string) => {
		console.log(letter);
	}
	
  return (
	<View style={{flexDirection: 'column'}}>
		<View style={{flex: 1, flexDirection: 'row', alignItems: 'top', justifyContent: 'space-between'}}>
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
		
		<View style={{flex: 6, alignItems: 'center'}}>
			<GuessBoard wordLength={5} tries={6} guesses={["HELLO", "WORLD", "HI", "HOW", "ARE", "YOU"]}/>
		</View>
		
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Keyboard onPress={onPress}/>
		</View>
	</View>
  );
}

export default GameScreen;