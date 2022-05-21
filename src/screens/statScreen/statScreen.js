import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../../util/themes.js';

import BasicHeader from '../../component/basicHeader/basicHeader.js';
import StatModule from './statModule.js';

import styles from './statScreenStyle.js';

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	datasets: [
	  {
		data: [1, 2, 3, 4, 5, 6, 7, 8],
	  },
	],
}

function StatScreen({ navigation }) {
	const {theme, setTheme} = React.useContext(ThemeContext);
	
	const textColor = {color: theme.colors.text};
	
	return (
		<View style={{flexDirection: 'column'}}>
			<BasicHeader iconColor={theme.colors.text} title={"THỐNG KÊ"} onPress={() => navigation.goBack()} />
			
			<StatModule
			data={data}
			backgroundColor={theme.colors.background}
			accessible={theme.accessible}
			dark={theme.dark}	
			textColor={textColor}/>
		</View>
	);
}

export default StatScreen;