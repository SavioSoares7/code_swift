import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { MyTabs } from "./routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <MyTabs />
    </View>
  );
}
