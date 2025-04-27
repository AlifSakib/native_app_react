import { Text, View } from "react-native";
import "../globals.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-5xl text-dark-200">Welcome.</Text>
      <Text className="text-lg ">Enjoy your stay!</Text>
    </View>
  );
}
