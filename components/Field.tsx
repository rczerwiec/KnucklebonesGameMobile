import { View, Text, Image } from "react-native";
import { One, Two, Three, Four, Five, Six } from "../assets/svg/dices";
import { SvgXml } from "react-native-svg";

export default function Field() {
  return (
    <View
      style={{
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        width: "100%",
        height: 70,
      }}
    >
        <SvgXml xml={Five} width="100%" height="100%" />
    </View>
  );
}
