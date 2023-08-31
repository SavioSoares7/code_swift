import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    width: "80%",
    flex: 1,
  },
  header: {
    height: 80,
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  subTitle: {
    fontSize: 16,
    color: "#000",
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
  },
  topInfo: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
  info: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  imgBuy: {
    height: 300,
    width: "100%",
  },
  ButText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#475F7D",
    marginTop: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC783F",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
