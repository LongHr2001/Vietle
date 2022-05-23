import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { ThemeContext } from '../../util/themes.js';
import GuessBoard from '../../component/guessBoard/guessBoard.js';
import Keyboard from '../../component/keyboard/keyboard.js';

import styles from './gameScreenStyle.js';

function GameScreenRenderer({ navigation, wordLength, guesses, accuracy, handleKey, keyboard}) {	
	const {theme, setTheme} = React.useContext(ThemeContext);
	
	const textColor = {color: theme.colors.text};
	
	const maxWidth = 500;
	const minWidth = Dimensions.get("window").width < 500 ? Dimensions.get("window").width : 500;
	
	return (
		<View style={{flex: 1, flexDirection: 'column', minWidth: minWidth, maxWidth: maxWidth, marginHorizontal: 'auto'}}>
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
				<View style={{flex: 1, justifyContent: 'flex-start'}}>
					<TouchableOpacity style={{width: 25}} onPress={() => navigation.navigate('Help')} >
						<FontAwesomeIcon color={theme.colors.text} style={{margin: 5}} icon={"question-circle"} size={25} />
					</TouchableOpacity>
				</View>
			
				<View style={{flex: 1, alignItems: 'center'}}>
					<Image style={styles.logo} source={require('../../../assets/logo.png')} />
				</View>
				
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
					<TouchableOpacity onPress={() => navigation.navigate('Stat')} >
						<FontAwesomeIcon color={theme.colors.text} style={{margin: 5}} icon={"chart-bar"} size={25} />
					</TouchableOpacity>
					
					<TouchableOpacity onPress={() => navigation.navigate('Setting')} >
						<FontAwesomeIcon color={theme.colors.text} style={{margin: 5}} icon={"cog"} size={25} />
					</TouchableOpacity>
				</View>
			</View>
			
			<View style={{flex: 7, alignItems: 'center', justifyContent: 'center', padding: 5}}>
				<GuessBoard
				wordLength={wordLength}
				guesses={guesses}
				accuracy={accuracy}
				dark={theme.dark}
				accessible={theme.accessible}
				/>
			</View>
			
			<View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
				<Keyboard
				onPress={handleKey}
				keyboard={keyboard}
				dark={theme.dark}
				accessible={theme.accessible} />
			</View>
		</View>
	);
}

export default GameScreenRenderer;