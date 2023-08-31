import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  imgContainer: {
    height: 150,
  },
  imgBg: { flex: 1, resizeMode: "contain" },
  textPrimary: {
    color: "#3E3A40",
    fontSize: 30,
    fontWeight: "bold",
  },
  divInputs: {
    marginTop: 10,
  },
  containerInputs: {
    marginTop: 20,
  },
  span: {
    color: "#f0f0f0",
  },
  spanDark: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    color: "#fff",
    height: 56,
    backgroundColor: "#F7F7F8",
    borderRadius: 5,
    width: 300,
    paddingLeft: 10,
  },
  buttonAcess: {
    backgroundColor: "#059A37",
    textAlign: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  containerRadios: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgets: {
    marginTop: 14,
    fontSize: 16,
    color: "#4f4e4e",
  },
  createAcount: {
    flex: 1,
    marginTop: 30,
  },
  buttonCreateAcount: {
    width: 300,
    backgroundColor: "#c7c9c9",
    padding: 30,
    borderRadius: 10,
    marginTop: 20,
  },
});
