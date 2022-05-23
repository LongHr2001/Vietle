import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../../util/themes.js';

import BasicHeader from '../../component/basicHeader/basicHeader.js';
import StatModule from './statModule.js';
import { StatisticContext } from '../../data/playerStatistic.js';

import styles from './statScreenStyle.js';

function StatScreen({ navigation }) {
	const {theme, setTheme} = React.useContext(ThemeContext);
	const {playerData, setPlayerData} = React.useContext(StatisticContext);
	
	const textColor = {color: theme.colors.text};
	
	const maxWidth = 500;
	const minWidth = Dimensions.get("window").width < 500 ? Dimensions.get("window").width : 500;
	
	return (
		<View style={{flexDirection: 'column', minWidth: minWidth, maxWidth: maxWidth, marginHorizontal: 'auto'}}>
			<View style={{marginTop: 15}}>
				<BasicHeader iconColor={theme.colors.text} title={"THỐNG KÊ"} onPress={() => navigation.goBack()} />
			</View>
			
			<StatModule
			data={playerData}
			backgroundColor={theme.colors.background}
			accessible={theme.accessible}
			dark={theme.dark}	
			textColor={textColor}
			chartWidth={minWidth * 0.8}/>
		</View>
	);
}

export default StatScreen;