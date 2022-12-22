import { createContext } from "react";
import { useState } from "react";

const KnucklebonesContext = createContext();

function Provider({children}){
    const [diceNumber, setDiceNumber] = useState<any>(1);
    const [diceThrowed, setDiceThrowed] = useState(false);
    const [playerTurn, setPlayerTurn] = useState(false); //true - player 1, false - player 2
    const [gameEnded, setGameEnded] = useState(false);
    const [player2FieldsStatus, setPlayer2FieldsStatus] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]); //player 2 fields status
      const [playerFieldsStatus, setPlayerFieldsStatus] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);

    const handleOnDiceClick = (number) => {
        setDiceNumber(number);
        setDiceThrowed(true);
        setPlayerTurn(!playerTurn);
      };
    
    const handleOnFieldClick = (fieldIndex) => {
        setDiceThrowed(false);
        setFieldStatus(playerTurn,diceNumber,fieldIndex)
      };


    const setFieldStatus = (type, number, id) => {
        if (type) {
          let updatedPlayer2Field = [];
          const updatedField = playerFieldsStatus.map((o, index) => {
            if (index === id) {
                updatedPlayer2Field = player2FieldsStatus.map((x, ind) => {
                if (index === 6 || index === 3 || index === 0) {
                  if (ind === 6 || ind === 3 || ind === 0) {
                    if (x === number) {
                      return null;
                    }
                  }
                } else if (index === 7 || index === 4 || index === 1) {
                  if (ind === 7 || ind === 4 || ind === 1) {
                    if (x === number) {
                      return null;
                    }
                  }
                } else {
                  if (ind === 8 || ind === 5 || ind === 2) {
                    if (x === number) {
                      return null;
                    }
                  }
                }
    
                return x;
              });
              return number;
            }
            return o;
          });
    
          setPlayer2FieldsStatus(updatedPlayer2Field);
          setPlayerFieldsStatus(updatedField);
          const player2FieldsTaken = updatedField.filter(
            (x) => x != null
          ).length;
          if (player2FieldsTaken === 9)
            setGameEnded(true);
    
    
        } else {
          let updatedField = [];
          const updatedPlayer2Field = player2FieldsStatus.map((o, index) => {
            if (index === id) {
                updatedField = playerFieldsStatus.map((x, ind) => {
                if (index === 6 || index === 3 || index === 0) {
                  if (ind === 6 || ind === 3 || ind === 0) {
                    if (x === number) {
                      return null;
                    }
                  }
                } else if (index === 7 || index === 4 || index === 1) {
                  if (ind === 7 || ind === 4 || ind === 1) {
                    if (x === number) {
                      return null;
                    }
                  }
                } else {
                  if (ind === 8 || ind === 5 || ind === 2) {
                    if (x === number) {
                      return null;
                    }
                  }
                }
    
                return x;
              });
              return number;
            }
    
            return o;
          });
          setPlayerFieldsStatus(updatedField);
          setPlayer2FieldsStatus(updatedPlayer2Field);
    
          const enemyFieldsTaken = updatedPlayer2Field.filter((x) => x != null).length;
    
          if (enemyFieldsTaken === 9)
              setGameEnded(true);
        }
      };

    return(
        <KnucklebonesContext.Provider value={{
            setFieldStatus,
            player2FieldsStatus,
            playerFieldsStatus,
            playerTurn,
            setPlayerTurn,
            diceNumber,
            setDiceNumber,
            diceThrowed,
            setDiceThrowed,
            gameEnded,
            setGameEnded,
            handleOnDiceClick,
            handleOnFieldClick
        }}>
            {children}
        </KnucklebonesContext.Provider>
    )
}

export {KnucklebonesContext}
export default Provider;