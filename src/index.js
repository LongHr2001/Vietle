import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LIGHT_THEME, DARK_THEME, ThemeContext } from './util/themes.js';
import { GameCompleteContext } from './util/gameComplete.js';
import { StatisticContext, playerStatistic } from './data/playerStatistic.js';

import GameScreen from './screens/gameScreen/gameScreen';
import HelpScreen from './screens/helpScreen/helpScreen';
import SettingScreen from './screens/settingScreen/settingScreen';
import StatScreen from './screens/statScreen/statScreen';
import WinScreen from './screens/winScreen/winScreen';

const Stack = createNativeStackNavigator();

function Index() {
	const [theme, setTheme] = React.useState(LIGHT_THEME);
	const [gameComplete, setGameComplete] = React.useState(false);
	const [playerData, setPlayerData] = React.useState(playerStatistic);
	
	return (
		<StatisticContext.Provider value={{playerData, setPlayerData}}>
		<GameCompleteContext.Provider value={{gameComplete, setGameComplete}}>
		<ThemeContext.Provider value={{theme, setTheme}}>
			<NavigationContainer theme={theme}>
				<Stack.Navigator
				screenOptions={{
				headerShown: false}} >
					<Stack.Screen name="Game" component={GameScreen}/>
					
					<Stack.Screen name="Help" component={HelpScreen} />
					
					<Stack.Screen name="Stat" component={StatScreen} />
					
					<Stack.Screen name="Setting" component={SettingScreen} />
					
					<Stack.Screen name="Win" component={WinScreen} />
					
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeContext.Provider>
		</GameCompleteContext.Provider>
		</StatisticContext.Provider>
	);
}

export default Index;