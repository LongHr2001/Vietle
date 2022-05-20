import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { LIGHT_THEME, DARK_THEME, ThemeContext } from '../../util/themes.js';

import Toggle from '../../component/toggle/toggle.js';

import styles from './settingScreenStyle.js';

function SettingScreen({ navigation }) {
	const {colors} = useTheme();
	const textColor = {color: colors.text};
	
	const titleStyles = [styles.title];
	titleStyles.push(textColor);
	
	const {theme, setTheme} = React.useContext(ThemeContext);
	
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
		<View style={{flexDirection: 'column'}}>
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 1}}>
					<TouchableOpacity style={{width: 30}} onPress={() => navigation.goBack()} >
						<FontAwesomeIcon color={colors.text} style={{margin: 5}} icon={"times"} size={30} />
					</TouchableOpacity>
				</View>
				
				<View style={{flex: 1, alignItems: "center", marginTop: 5}}>
					<Text style={titleStyles}>CÀI ĐẶT</Text>
				</View>
				
				<View style={{flex: 1}}></View>
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
				<Text style={{color: colors.text, textAlign: 'center'}}>Vietle By Team 13: Nguyễn Vũ Hải Long, Trần Trung Hiếu, Nguyễn Lê Hải Nam</Text>
			</View>
		</View>
	);
}

export default SettingScreen;