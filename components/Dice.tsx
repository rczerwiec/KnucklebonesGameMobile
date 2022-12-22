import { View, Text, Image, TouchableHighlight } from "react-native";
import { One, Two, Three, Four, Five, Six } from "../assets/svg/dices";
import { SvgXml } from "react-native-svg";
import { useContext, useState } from "react";
import { KnucklebonesContext } from "../context/knucklebones";


export default function Dice() {
    const {diceNumber,handleOnDiceClick} = useContext(KnucklebonesContext);

    const throwDice = () => {
        const random = Math.floor(Math.random()*6) +1;
        handleOnDiceClick(random);
    }

    let dice = One

    if (diceNumber===2) dice = Two
    else if (diceNumber===3) dice = Three
    else if (diceNumber===4) dice = Four
    else if (diceNumber===5) dice = Five
    else if (diceNumber===6) dice = Six

  return (
    <TouchableHighlight onPress={throwDice} underlayColor="white">
      <View
        style={{
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: 1,
          width: 70,
          height: 70,
        }}
      >
        <SvgXml xml={dice} width="100%" height="100%" />
      </View>
      
    </TouchableHighlight>
  );
}

//
