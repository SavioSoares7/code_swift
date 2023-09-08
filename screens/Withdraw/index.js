import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";

import { useState } from "react";

export default function Withdraw() {
  const [nameHeart, setNameHeart] = useState("hearto");

  function modifiedHeart() {
    if (nameHeart == "heart") {
      setNameHeart("hearto");
    } else {
      setNameHeart("heart");
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Animatable.View
            style={styles.ball1}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
            delay={1}
          ></Animatable.View>

          <Animatable.View
            style={styles.ball2}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
            delay={3}
          ></Animatable.View>

          <Animatable.View
            style={styles.ball3}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
            delay={10}
          ></Animatable.View>

          <Animatable.View
            style={styles.ball4}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
          ></Animatable.View>

          <Animatable.View
            style={styles.ball5}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
          ></Animatable.View>

          <Animatable.View
            style={styles.ball6}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
          ></Animatable.View>

          <Animatable.View
            style={styles.ball7}
            animation="slideInDown"
            iterationCount="infinite"
            direction="alternate"
          ></Animatable.View>
        </View>
      </SafeAreaView>
      <ImageBackground
        source={require("../../resource/img/wave.png")}
        style={styles.bgImg}
      />
      <View style={styles.header}>
        <View style={styles.infoHeader}>
          <Avatar.Image
            size={32}
            source={require("../../resource/img/user.jpg")}
          />
          <Text style={styles.subTitle}> Kauê Brito</Text>
        </View>
        <View style={styles.infoHeader}>
          <AntDesign name="star" size={24} color="#FFD700" />
          <Text>50</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.item}>
            <View style={styles.topInfo}>
              <View style={styles.info}>
                <AntDesign name="star" size={24} color="#FFD700" />
                <Text>50</Text>
              </View>
              <AntDesign
                size={24}
                name={nameHeart}
                color="#ed3c28"
                onPress={modifiedHeart}
              />
            </View>
            <Image
              style={styles.imgBuy}
              source={{
                uri: "https://lojaoliz.com/wp-content/uploads/2022/08/GiftCard-iFood.jpg",
              }}
            />
            <Text style={styles.ButText}>Gift Card Ifood</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Adquirir</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <View style={styles.topInfo}>
              <View style={styles.info}>
                <AntDesign name="star" size={24} color="#FFD700" />
                <Text>50</Text>
              </View>
              <AntDesign
                size={24}
                name={nameHeart}
                color="#ed3c28"
                onPress={modifiedHeart}
              />
            </View>
            <Image
              style={styles.imgBuy}
              source={{
                uri: "https://lojaoliz.com/wp-content/uploads/2022/08/GiftCard-iFood.jpg",
              }}
            />
            <Text style={styles.ButText}>Gift Card Ifood</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Adquirir</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
