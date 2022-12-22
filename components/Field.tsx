import { View, Text, Image, TouchableHighlight } from "react-native";
import { One, Two, Three, Four, Five, Six } from "../assets/svg/dices";
import { SvgXml } from "react-native-svg";
import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";

export default function Field({
  index,
  fieldType,
  fields
}) {

  const {handleOnFieldClick, playerTurn, gameEnded} = useContext(KnucklebonesContext)


  const handleFieldPress = () => {
    
    if (fieldType === playerTurn && fields[index] === null && gameEnded === false) {
      handleOnFieldClick(index);
    }
  };
  let dice = One;
  if (fields[index] === 2) dice = Two;
  else if (fields[index] === 3) dice = Three;
  else if (fields[index] === 4) dice = Four;
  else if (fields[index] === 5) dice = Five;
  else if (fields[index] === 6) dice = Six;

  const fieldNumber = () => {
    if (fields[index] === null) {
      return (
        <View
          style={{
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: 1,
            width: 80,
            height: 60,
          }}
        ></View>
      );
    } else {
      return (
        <View
          style={{
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: 1,
            width: 80,
            height: 60,
          }}
        >
          <SvgXml xml={dice} width="100%" height="100%" />
        </View>
      );
    }
  };

  return (
    <TouchableHighlight onPress={handleFieldPress} underlayColor="white">
      <View
        style={{
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: 1,
          width: 80,
          height: 60,
        }}
      >
        {fieldNumber()}
      </View>
    </TouchableHighlight>
  );
}

//
