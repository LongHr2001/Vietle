import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './buttonStyle.js'

function Button({buttonLabel, onPress, accessible}) {	
  return (
	<TouchableOpacity onPress={onPress}>
		<View style={accessible ? styles.buttonAccessible : styles.button}>
			<Text style={styles.buttonLetter}>{buttonLabel}</Text>
		</View>
	</TouchableOpacity>
  );
}

export default Button;