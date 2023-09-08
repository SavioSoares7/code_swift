import React from "react";
import { styles } from "./style";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

export default function Login() {
  const [checked, setChecked] = React.useState("first");

  return (
    <LinearGradient colors={["#EDECEE", "#ccc"]} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../resource/img/nature.png")}
          style={styles.imgBg}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textPrimary}>Bem vindo de volta!</Text>

        <View style={styles.divInputs}>
          <View style={styles.containerInputs}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9F9BA1"
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#9F9BA1"
            />
          </View>
          <View style={styles.containerRadios}>
            <View style={styles.radio}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text>Empresa</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text>Usuário</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonAcess}>
            <Text style={styles.span}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.forgets}>Esqueceu a senha ?</Text>
        </View>

        <View style={styles.createAcount}>
          <TouchableOpacity style={styles.buttonCreateAcount}>
            <Text style={styles.spanDark}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
