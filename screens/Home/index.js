import React from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <LinearGradient colors={["#eee", "#eee"]} style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../../resource/img/Nature2.png")}
          style={styles.imgBg}
        />
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <View>
          <Text style={styles.title}>Produtos</Text>
        </View>
        <ScrollView>
          <View style={styles.containerItens}>
            <View style={styles.containerGlobalItens}>
              <Image
                source={require("../../resource/img/logo.png")}
                style={styles.textImg}
              />
              <View style={styles.item}>
                <Image
                  source={require("../../resource/img/papel.png")}
                  style={styles.itensBg}
                />
                <View>
                  <View style={styles.textContainer}>
                    <View style={styles.itemText}>
                      <Text style={styles.Strong}>Produto:</Text>
                      <Text>Papel</Text>
                    </View>

                    <View style={styles.itemText}>
                      <Text style={styles.Strong}>Quantidade:</Text>
                      <Text>1kg</Text>
                    </View>

                    <Text style={styles.itemText}>
                      <Text style={styles.Strong}>Local:</Text>
                      <Text>Rua Teste Teste</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <Button title="Acessar" color="#87c7a1"></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
