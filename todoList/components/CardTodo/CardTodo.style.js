import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
    card: {
      backgroundColor: "white",
      shadowColor: "#000",
      height: 115,
      width: 400,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 13,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 25,
    },
    img: {
      height: 25,
      width: 25,
    },
  });
