import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../../util/themes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import BasicHeader from '../../component/basicHeader/basicHeader.js';
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
			
			<View style={{alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
					<Text style={{margin: 5}}>Copy</Text>
					
					<Text style={{margin: 5}}>Chia sẻ</Text>
				</View>
			</View>
		</View>
	);
}

export default StatScreen;