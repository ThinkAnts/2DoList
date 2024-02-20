import { cardStyle } from "./CardTodo.style";
import { Text, TouchableOpacity, Image } from "react-native";
import checkLogo from "../../assets/check.png";

export function CardTodo({ todo, onPress }) {
  return (
    <TouchableOpacity style={cardStyle.card} onPress={() => onPress(todo)}>
      <Text
        style={[
            cardStyle.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={cardStyle.img} source={checkLogo} />}
    </TouchableOpacity>
  );
}
