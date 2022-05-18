import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameScreen from './screens/gameScreen/gameScreen.js';
import HelpScreen from './screens/helpScreen';
import SettingScreen from './screens/settingScreen';
import StatScreen from './screens/statScreen';
import WinScreen from './screens/winScreen';

const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer>
		<Stack.Navigator
		screenOptions={{
		contentStyle: {backgroundColor: '#FFFFFF'}, headerShown: false}} >
			<Stack.Screen name="Game" component={GameScreen} />
			<Stack.Screen name="Help" component={HelpScreen} />
			<Stack.Screen name="Stat" component={StatScreen} />
			<Stack.Screen name="Setting" component={SettingScreen} />
			<Stack.Screen name="Win" component={WinScreen} />
		</Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;