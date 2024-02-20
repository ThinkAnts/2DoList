import { style } from "./AppStyle.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabButtonMenu } from "./components/TabButtonMenu/TabButtonMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Walk the dog", isCompleted: true},
    { id: 2, title: "Learn React Native", isCompleted: false},
    { id: 3, title: "Learn data structures", isCompleted: false},
    { id: 4, title: "Learn data structures 1", isCompleted: false},
    { id: 5, title: "Learn data structures 2", isCompleted: true},
    { id: 6, title: "Learn data structures 3", isCompleted: false},
    { id: 7, title: "Learn data structures 4", isCompleted: false},
    { id: 8, title: "Learn data structures 5", isCompleted: false}
  ])

  const [selectedTabName, setSelectedTabName] = useState("all")
  function renderTodoList() {
    return todoList.map((todo) => 
    <View key={todo.id} style= {style.cardItem}>
        <CardTodo onPress = {updateTodo} todo={todo}/>
    </View>
    )
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const updateTodoList = [...todoList]
    const indexToUpdate = updateTodoList.findIndex(
      t => t.id === updatedTodo.id
    );
    updateTodoList[indexToUpdate] = updatedTodo
    setTodoList(updateTodoList)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.app}>
        <View style={style.header}><Header/></View>
        <View style={style.body}>
          <ScrollView>
          {renderTodoList()}
          </ScrollView>
          </View>
        <View style={style.footer}><TabButtonMenu onPress={setSelectedTabName} selectedTabName={selectedTabName}/></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
