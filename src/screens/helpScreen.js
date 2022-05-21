import * as React from 'react';
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import guessSquare from "/src/component/guessBoard/guessSquare/guessSquare.js";

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
			  <Button title="Back" onPress={() => navigation.goBack()} />
		  </View>
      <Text style={styles.title}>HOW TO PLAY</Text>
      <br />
      <br />

      <View>
        <Text style={styles.content}>Có năm lần thử</Text>
        <Text style={styles.content}>Nhập từ và nhấn enter</Text>
        <Text style={styles.content}>Đúng sai theo màu sắc</Text>
      </View>
      <br />
      <View
        style={{ borderBottomColor: "#3A3A3D", borderBottomWidth: 1 }}
      ></View>

      <br />
      <br />

      <View>
        <Text style={styles.content}>VÍ DỤ</Text>
      </View>

      <View style={styles.map}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>T</Text>
          </View>
          <View style={styles.greenCell}>
            <Text style={styles.cellText}>R</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Ă</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>N</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>G</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.content}>CHỮ R Ở ĐÚNG VỊ TRÍ</Text>
      </View>
      <br />
      <br />

      <View style={styles.map}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>V</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>U</Text>
          </View>
          <View style={styles.yellowCell}>
            <Text style={styles.cellText}>Ô</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>N</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>G</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.content}>CHỮ Ô CÓ TRONG TỪ</Text>
      </View>
      <br />
      <br />

      <View style={styles.map}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.cellText}>G</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Ư</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Ơ</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>N</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>G</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.content}>CHỮ G, Ư, Ơ, N, G KHÔNG CÓ TRONG TỪ</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
  content: {
    color: "#fff",
    fontSize: 26,
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  map: {
    alignSelf: "stretch",
    height: 100,
  },
  row: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  cell: {
    borderWidth: 3,
    borderColor: "#3A3A3D",
    backgroundColor: "#000",
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  greenCell: {
    borderWidth: 3,
    borderColor: "#3A3A3D",
    backgroundColor: "#00FF00",
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  yellowCell: {
    borderWidth: 3,
    borderColor: "#3A3A3D",
    backgroundColor: "#FFFF00",
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  cellText: {
    color: "#D7DADC",
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default HelpScreen;
