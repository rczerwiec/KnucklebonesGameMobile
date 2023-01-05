import { View, Text, Image, TouchableHighlight } from "react-native";
import { SvgXml } from "react-native-svg";
import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";
import SingleDiceField from "./SingleDiceField";

export default function Field({ index, fieldType, fields }) {
  const { handleOnFieldClick, playerTurn, gameEnded } =
    useContext(KnucklebonesContext);

  const handleFieldPress = () => {
    if (
      fieldType === playerTurn &&
      fields[index] === null &&
      gameEnded === false
    ) {
      handleOnFieldClick(index);
    }
  };

  const fieldNumber = () => {
    if (fields[index] === null) {
      return (
        <SingleDiceField diceValue={0}/>
      );
    } else {
      return <SingleDiceField diceValue={fields[index]} />;
    }
  };

  return (
    <TouchableHighlight onPress={handleFieldPress} underlayColor="white">
        {fieldNumber()}
    </TouchableHighlight>
  );
}

//
