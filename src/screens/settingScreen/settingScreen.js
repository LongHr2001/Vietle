import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { LIGHT_THEME, DARK_THEME, ThemeContext } from '../../util/themes.js';

import Toggle from '../../component/toggle/toggle.js';

import BasicHeader from '../../component/basicHeader/basicHeader.js';

import styles from './settingScreenStyle.js';

function SettingScreen({ navigation }) {
	const {theme, setTheme} = React.useContext(ThemeContext);
	
	const textColor = {color: theme.colors.text};
	
	const handleAccessibility = () => {
		let temp = !theme.accessible;
		setTheme({...theme, accessible: temp});
	}
	
	const handleDarkTheme = () => {
		let tempAccessible = theme.accessible;
		let tempTheme = theme.dark === false ? DARK_THEME : LIGHT_THEME;
		
		setTheme({...tempTheme, accessible: tempAccessible});
	}
	
	return (
		<View style={{flexDirection: 'column', maxWidth: 500, marginHorizontal: 'auto'}}>
			<View style={{marginTop: 5}}>
				<BasicHeader iconColor={theme.colors.text} title={"CÀI ĐẶT"} onPress={() => navigation.goBack()} />
			</View>
			
			<View>
				<View style={styles.optionRow}>
					<View>
						<Text style={textColor}>Nền tối</Text>
					</View>
					
					<View>
						<Toggle isOn={theme.dark} accessible={theme.accessible} dark={theme.dark} onPress={handleDarkTheme}/>
					</View>
				</View>
				
				<View style={styles.optionRow}>
					<View>
						<Text style={textColor}>Tương phản màu</Text>
					</View>
					
					<View>
						<Toggle isOn={theme.accessible} accessible={theme.accessible} dark={theme.dark} onPress={handleAccessibility} />
					</View>
				</View>
			</View>
			
			<View>
				<Text style={{color: theme.colors.text, textAlign: 'center', fontSize: 10}}>Vietle By Team 13: Nguyễn Vũ Hải Long, Trần Trung Hiếu, Nguyễn Lê Hải Nam</Text>
			</View>
		</View>
	);
}

export default SettingScreen;