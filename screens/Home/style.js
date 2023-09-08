import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  containerGlobalItens: { marginBottom: 20, position: "relative" },
  title: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
  },
  containerItens: {
    padding: 30,
  },
  searchBar: {
    backgroundColor: "#ddd",
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#bfdbcd",
    flexDirection: "row",
    justifyContent: "space-around",
    minWidth: "100%",
    maxHeight: 200,
  },
  itensBg: {
    height: 100,
    width: 100,
    borderRightWidth: 1,
  },
  textImg: {
    height: 40,
    width: 60,
    position: "absolute",
    zIndex: 999,
    top: -30,
  },

  imgBg: { resizeMode: "contain", height: 200, marginBottom: 20 },
  Strong: { fontWeight: "bold", letterSpacing: 0.7 },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  itemText: { flexDirection: "row", gap: 10 },
});
