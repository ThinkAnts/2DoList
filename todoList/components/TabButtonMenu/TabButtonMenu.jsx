import { TouchableOpacity, Text, View } from "react-native";
import { s } from "./TabButtonMenu.style";

export function TabButtonMenu({selectedTabName, onPress }) {

    function getTextStyle(tabName) {
        return {
            fontWeight: "bold",
            color: selectedTabName === tabName ? "#2F76E5":"black"
        }
    }

    return <View style = {s.root}>
        <TouchableOpacity onPress = {() => onPress("all")}><Text style= {getTextStyle("all")}>All</Text></TouchableOpacity>
        <TouchableOpacity onPress = {() => onPress("inProgress")}><Text style= {getTextStyle("inProgress")}>In Progress</Text></TouchableOpacity>
        <TouchableOpacity onPress = {() => onPress("completed")}><Text style= {getTextStyle("completed")}>Completed</Text></TouchableOpacity>
    </View>
}