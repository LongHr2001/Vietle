import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Clipboard from 'expo-clipboard';

import { ThemeContext } from '../../util/themes.js';
import { GameCompleteContext } from '../../util/gameComplete.js';
import BasicHeader from '../../component/basicHeader/basicHeader.js';
import Button from '../../component/button/button.js';
import StatModule from '../statScreen/statModule.js';
import { StatisticContext } from '../../data/playerStatistic.js';

import styles from './winScreenStyle.js';

const greenSquare = String.fromCodePoint(0x1F7E9);
const yellowSquare = String.fromCodePoint(0x1F7E8);
const whiteSquare = String.fromCodePoint(0x2B1C);

function StatScreen({ navigation, route }) {
	const {theme, setTheme} = React.useContext(ThemeContext);
	const textColor = {color: theme.colors.text};
	
	const {playerData, setPlayerData} = React.useContext(StatisticContext);
	
	const maxWidth = 500;
	const minWidth = Dimensions.get("window").width < 500 ? Dimensions.get("window").width : 500;
	
	const accuracy = route.params.accuracy;
	const guessIndex = route.params.guessIndex;
	const wordLength = route.params.wordLength;
	const win = route.params.win;
	
	var message = "Việtle ".concat(win ? guessIndex + 1 : "X").concat("/").concat(wordLength + 1).concat(":\n\n");
	
	const {gameComplete, setGameComplete} = React.useContext(GameCompleteContext);
	
	Array(guessIndex + 1).fill(1).map((e, i) => {
		let temp = "";
		
		accuracy[i].split("").map(e => {
			if (e === '1') {temp = temp.concat(greenSquare);}
			else if (e === '2') {temp = temp.concat(yellowSquare);}
			else if (e === '3') {temp = temp.concat(whiteSquare);}
		});
		
		message = message.concat(temp).concat("\n");
	});
	
	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(message);
		alert("Copy thành công");
	};
	
	const onShare = async () => {
		try {
			const result = await Share.share({ message: message });
			if (result.action === Share.sharedAction) {
				alert("Chia sẻ thành công");
			}
		} catch (error) {
			alert(error.message);
		}
	};
	
	const replay = () => {
		setGameComplete(!gameComplete);
		navigation.goBack();
	};
	
	return (
		<View style={{flexDirection: 'column', minWidth: minWidth, maxWidth: maxWidth, marginHorizontal: 'auto'}}>
			<View style={{marginTop: 15}}>
				<BasicHeader iconColor={theme.colors.text} title={win ? "THẮNG" : "THUA"} onPress={() => {}} backDisabled={true}/>
			</View>	
			
			<StatModule
			data={playerData}
			backgroundColor={theme.colors.background}
			accessible={theme.accessible}
			dark={theme.dark}	
			textColor={textColor}
			chartWidth={minWidth * 0.8}/>
			
			<View style={{alignItems: 'center', marginTop: 10}}>
				<View style={{flexDirection: 'row'}}>
					<Button buttonLabel={"COPY"} onPress={copyToClipboard} accessible={theme.accessible} />
					
					<Button buttonLabel={"CHIA SẺ"} onPress={onShare} accessible={theme.accessible} />
					
					<Button buttonLabel={"CHƠI LẠI"} onPress={replay} accessible={theme.accessible} />
				</View>
			</View>
		</View>
	);
}

export default StatScreen;