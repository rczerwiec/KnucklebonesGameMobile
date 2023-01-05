import SingleDiceField from "./SingleDiceField";
import { Text, View } from "react-native";

export default function TurnScreen({ diceNumber, playerTurn }) {
  return (
    <View style={{
        justifyContent:"center",
        flexDirection: "row",
        alignItems: "center",
    }}>
      <Text style={{ color: "white" }}>{playerTurn} Turn | Dice Value:</Text>
      <SingleDiceField diceValue={diceNumber} />
    </View>
  );
}
