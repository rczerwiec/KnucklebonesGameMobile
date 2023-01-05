import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { One, Two, Three, Four, Five, Six } from "../assets/svg/dices";

export default function SingleDiceField({ diceValue }) {
  let dice = One;
  if (diceValue === 2) dice = Two;
  else if (diceValue === 3) dice = Three;
  else if (diceValue === 4) dice = Four;
  else if (diceValue === 5) dice = Five;
  else if (diceValue === 6) dice = Six;

  return (
    <View
      style={{
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        width: 70,
        height: 70,
      }}
    >
      {diceValue === 0 || <SvgXml xml={dice} width="100%" height="100%" />}
    </View>
  );
}
