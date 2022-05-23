import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeContext } from '../../util/themes.js';
import BasicHeader from '../../component/basicHeader/basicHeader.js'
import { GuessRow } from '../../component/guessBoard/guessBoard.js';

function HelpScreen({ navigation }) {
	const { theme, setTheme } = React.useContext(ThemeContext);
	
	const maxWidth = 500;
	const minWidth = Dimensions.get("window").width < 500 ? Dimensions.get("window").width : 500;

	const textColor = { color: theme.colors.text };
	const exampleStyle = {color: theme.colors.text, fontWeight: '500'};

	return (
		<View style={{flex: 1, flexDirection: 'column', minWidth: minWidth, maxWidth: maxWidth, marginHorizontal: 'auto'}}>
			<View style={{marginTop: 15}}>
				<BasicHeader iconColor={theme.colors.text} title={"TRỢ GIÚP"} onPress={() => navigation.goBack()}/>
			</View>

			<View style={{alignItems: 'center', margin: 5}}>
				<Text>{"\n"}</Text>
				<Text style={textColor}>Hãy đoán đáp án dựa theo gợi ý!</Text>
				<Text>{"\n"}</Text>
				<Text style={textColor}>Chỉ cần nhập từ và nhấn "NHẬP"!</Text>
				<Text>{"\n"}</Text>
				<Text style={textColor}>Màu của ô sẽ thay đổi theo độ chính xác của ký tự đó!</Text>
				<Text>{"\n"}</Text>
				<Text style={exampleStyle}>VÍ DỤ</Text>
				<Text>{"\n"}</Text>
			</View>

			<View style={{alignItems: 'center', margin: 5}}>
				<GuessRow
				  wordLength={5}
				  guess={"TRANG"}
				  accuracy={"01000"}
				  dark={theme.dark}
				  accessible={theme.accessible}
				/>
				
				<Text style={textColor}>Chữ R có trong đáp án và ở đúng vị trí</Text>
				<Text>{"\n"}</Text>
			</View>

			<View style={{alignItems: 'center', margin: 5}}>
				<GuessRow
				  wordLength={5}
				  guess={"VUONG"}
				  accuracy={"00200"}
				  dark={theme.dark}
				  accessible={theme.accessible}
				/>
				
				<Text style={textColor}>Chữ O có trong đáp án nhưng sai vị trí</Text>
				<Text>{"\n"}</Text>
			</View>

			<View style={{alignItems: 'center', margin: 5}}>
				<GuessRow
				  wordLength={5}
				  guess={"GUONG"}
				  accuracy={"33333"}
				  dark={theme.dark}
				  accessible={theme.accessible}
				/>
				
				<Text style={textColor}>Chữ G, U, O không có trong đáp án</Text>
			</View>
		</View>
	);
}

export default HelpScreen;
