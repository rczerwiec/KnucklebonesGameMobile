import { View, Text } from "react-native";
import Dice from "../../components/Dice";

function ThrowDice(){
    return(
    <View style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }}>
        <Text style={{
            color: "white",
        }}>Throw a dice</Text>
        <Dice />
      </View>
    )
}
export default ThrowDice;