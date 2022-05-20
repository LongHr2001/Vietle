import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function Toggle({isOn, accessible, dark, onPress}: {isOn: boolean, accessible: boolean, dark: boolean, onPress: () => void}) {	
	return (
		<View>
			<TouchableOpacity style={{width: 30}} onPress={onPress} >
				{isOn
				? <FontAwesomeIcon color={accessible ? "#85C0F9" : "#6AAA64"} icon={"toggle-on"} size={30} />
				: <FontAwesomeIcon color={dark ? "#FFFFFF" : "#000000"} icon={"toggle-off"} size={30} />}
			</TouchableOpacity>
		</View>
	);
}

export default Toggle;