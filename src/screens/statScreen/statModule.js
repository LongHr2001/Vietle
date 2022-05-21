import * as React from 'react';
import { View, Text } from 'react-native';
import {BarChart} from "react-native-chart-kit";

function StatModule({data, backgroundColor, accessible, dark, textColor}) {
	return (
		<View>
			<View style={{alignItems: 'center'}}>
				<BarChart
				data={data}
				width={500}
				height={300}
				fromZero={true}
				withHorizontalLabels={false}
				withInnerLines={false}
				showValuesOnTopOfBars={true}
				showBarTops={false}
				chartConfig=
				{{
				backgroundColor: backgroundColor,
				backgroundGradientFrom: backgroundColor,
				backgroundGradientTo: backgroundColor,
				fillShadowGradientTo: accessible ? "#85C0F9" : "#6aaa64",
				fillShadowGradientFrom: accessible ? "#85C0F9" : "#6aaa64",
				fillShadowGradientToOpacity: 1,
				fillShadowGradientFromOpacity: 1,
				color: (opacity = 1) => (dark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`),
				propsForLabels:{fontFamily: 'system font'},
				}}
				/>
			</View>
			
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 1, alignItems: 'center'}}>
					<Text style={textColor}>Số lần thắng</Text>
					<Text style={textColor}>1</Text>
				</View>
				
				<View style={{flex: 1, alignItems: 'center'}}>
					<Text style={textColor}>Tỉ lệ thắng</Text>
					<Text style={textColor}>2</Text>
				</View>
				
				<View style={{flex: 1, alignItems: 'center'}}>
					<Text style={textColor}>Chuỗi thắng</Text>
					<Text style={textColor}>3</Text>
				</View>
			</View>
		</View>
	);
}

export default StatModule;