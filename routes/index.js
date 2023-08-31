import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import { Home } from "../screens/Home";
import Profile from "../screens/Profile";
import Withdraw from "../screens/Withdraw";

import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Feather name="home" size={25} color="#000" />;
            },
          }}
        />
        <Screen
          name="Retirada"
          component={Withdraw}
          options={{
            tabBarIcon: () => {
              return <Entypo name="share-alternative" size={24} color="#000" />;
            },
          }}
        />
        <Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <AntDesign name="user" size={24} color="#000" />;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
