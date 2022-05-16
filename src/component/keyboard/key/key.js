import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './keyStyle.js'

function Key({keyLabel, onPress}) {
  return (
	<TouchableOpacity onPress={() => onPress(keyLabel)}>
	<View style={styles.key}>
		<Text style={styles.keyLetter}>{keyLabel}</Text>
	</View>
	</TouchableOpacity>
  );
}

export default Key;