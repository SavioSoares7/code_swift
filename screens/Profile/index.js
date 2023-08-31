import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Avatar, TextInput } from "react-native-paper";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Edite seu perfil</Text>

      <Avatar.Image
        style={{
          marginTop: 20,
        }}
        size={48}
        source={require("../../resource/img/user.jpg")}
      />

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputDefault} placeholder="Nome" />
        <TextInput style={styles.inputDefault} placeholder="Senha" />
        <TextInput style={styles.inputDefault} placeholder="Confirmar senha" />

        <TouchableOpacity style={styles.buttonInput}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
