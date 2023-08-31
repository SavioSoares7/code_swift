import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export default function Withdraw() {
  return (
    <View style={styles.container}>
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
              <AntDesign name="hearto" size={24} />
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
              <AntDesign name="hearto" size={24} />
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
              <AntDesign name="hearto" size={24} />
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
              <AntDesign name="hearto" size={24} />
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
              <AntDesign name="hearto" size={24} />
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
