import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import EditScreenInfo from "../components/EditScreenInfo";
import Field from "../components/Field";
import Dice from "../components/Dice";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { KnucklebonesContext } from "../context/knucklebones";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const {diceThrowed,diceNumber, playerTurn, gameEnded, playerFieldsStatus, player2FieldsStatus} = useContext(KnucklebonesContext)

  let content;
  if (diceThrowed) {
    content = (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Player 1</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FlatGrid
            itemDimension={80}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({ item }) => {
              const id = "player1" + item;
              return (
                <Field
                  key={id}
                  fieldType={true}
                  index={item-1}
                  fields={playerFieldsStatus}
                />
              );
            }}
          />
        </View>
        {playerTurn && gameEnded===false ? (<Text>Player 1 Turn:{diceNumber}</Text>): (!gameEnded  ?(<Text>Player 2 Turn:{diceNumber}</Text>) :(<Text>Game Over</Text>))}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatGrid
            itemDimension={80}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            renderItem={({ item }) => {
              const id = "player2" + item;
              return (
                <Field
                  key={id}
                  fieldType={false}
                  index={item-1}
                  fields={player2FieldsStatus}
                />
              );
            }}
          />
        </View>
        <Text>Player 2</Text>
      </View>
    );
  } else {
    content = (
      <View>
        <Text>Throw a dice</Text>
        <Dice/>
      </View>
    );
  }

  return <View style={{ alignItems: "center" }}>{content}</View>;
}

const styles = StyleSheet.create({});
