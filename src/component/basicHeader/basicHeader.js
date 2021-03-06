import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './basicHeaderStyle.js';

function BasicHeader({iconColor, title, onPress, backDisabled=false}) {
	const titleStyles = [styles.title];
	
	const titleFontSize = Dimensions.get("window").width < 500 ? (Dimensions.get("window").width/ 20) : 25;
	
	const color = {color: iconColor}
	titleStyles.push(color);
	titleStyles.push({fontSize: titleFontSize});
	
	return (
		<View style={{flexDirection: 'row'}}>
			<View style={{flex: 1}}>
				{backDisabled === false
				? <TouchableOpacity style={{width: 30}} onPress={onPress} >
					<FontAwesomeIcon color={iconColor} style={{margin: 5}} icon={"times"} size={30} />
				</TouchableOpacity>
				: <View></View>}
			</View>
			
			<View style={{flex: 1, alignItems: "center", marginTop: 5}}>
				<Text style={titleStyles}>{title}</Text>
			</View>
			
			<View style={{flex: 1}}></View>
		</View>
	);
}

export default BasicHeader;