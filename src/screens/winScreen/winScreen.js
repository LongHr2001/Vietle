import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../../util/themes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Clipboard from 'expo-clipboard';

import BasicHeader from '../../component/basicHeader/basicHeader.js';
import Button from '../../component/button/button.js';
import StatModule from '../statScreen/statModule.js';

import styles from './winScreenStyle.js';

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	datasets: [
	  {
		data: [1, 2, 3, 4, 5, 6, 7, 8],
	  },
	],
}

const greenSquare = String.fromCodePoint(0x1F7E9);
const yellowSquare = String.fromCodePoint(0x1F7E8);
const whiteSquare = String.fromCodePoint(0x2B1C);

function StatScreen({ navigation, route }) {
	const {theme, setTheme} = React.useContext(ThemeContext);
	const textColor = {color: theme.colors.text};
	
	const accuracy = route.params.accuracy;
	const guessIndex = route.params.guessIndex;
	const wordLength = route.params.wordLength;
	
	var message = "Việtle ".concat(guessIndex + 1).concat("/").concat(wordLength + 1).concat(":\n\n");
	
	Array(guessIndex + 1).fill(1).map((e, i) => {
		let temp = accuracy[i];
		
	});
	
	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(message);
	};
	
	const onShare = async () => {
		try {
			const result = await Share.share({ message: message });
			if (result.action === Share.sharedAction) {
				//shared
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};
	
	return (
		<View style={{flexDirection: 'column'}}>
			<BasicHeader iconColor={theme.colors.text} title={"KẾT QUẢ"} onPress={() => navigation.goBack()} />
			
			<StatModule
			data={data}
			backgroundColor={theme.colors.background}
			accessible={theme.accessible}
			dark={theme.dark}	
			textColor={textColor}/>
			
			<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
					<Button buttonLabel={"COPY"} onPress={copyToClipboard} accessible={theme.accessible} />
					
					<Button buttonLabel={"CHIA SẺ"} onPress={onShare} accessible={theme.accessible} />
				</View>
			</View>
		</View>
	);
}

export default StatScreen;