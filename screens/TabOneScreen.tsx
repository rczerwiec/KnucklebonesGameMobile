import { StyleSheet } from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import EditScreenInfo from '../components/EditScreenInfo';
import Field from '../components/Field';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View>
      <View style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
          
      }}>
      <FlatGrid itemDimension={80} data={[1,2,3,4,5,6,7,8,9]} renderItem={({item}) => (<Field/>)}/>
      </View>
      <View style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
      }}>
      <FlatGrid itemDimension={80} data={[1,2,3,4,5,6,7,8,9]} renderItem={({item}) => (<Field/>)}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
});
