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
					<Text style={{margin: 5}}>Share</Text>
					
					<View>
						<TouchableOpacity style={{width: 30}} onPress={() => console.log("Facebook")} >
							<FontAwesomeIcon color={theme.colors.text} style={{padding: 10}} icon={['fab', 'facebook']} size={30} />
						</TouchableOpacity>
					</View>

					<View>
						<TouchableOpacity style={{width: 30}} onPress={() => console.log("Twitter")} >
							<FontAwesomeIcon color={theme.colors.text} style={{padding: 10}} icon={['fab', 'twitter']} size={30} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

export default StatScreen;