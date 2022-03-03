import React, { Fragment } from 'react';
import type {Node} from 'react';
import { Text, FlatList, Image, Dimensions, ScrollView, useWindowDimensions, StyleSheet} from 'react-native';
import Header from './src/Components/Header';

const usuarios = [
  {usuario: "Pablo"},
  {usuario: "Christoffer"},
  {usuario: "Preben"},
]
const largurad = Dimensions.get("screen").width;

const App: () => Node = () => {
  const largura = useWindowDimensions().width;
  return (
    <ScrollView>
      <FlatList
        data={usuarios}
        //keyExtractor = {(item) =>item.id.toString()}
        renderItem={({item}) =>
        <Fragment>
          <Header nomeUsuario={item.usuario}/>
            <Image 
              source={require("./res/img/alura.jpg")}
              style={styles.imgfeed}/>
       </Fragment>}
      />
     
    </ScrollView>
  );
};


 const styles = StyleSheet.create({
   imgfeed: {
     width: largurad,
     height: largurad
   }
 });

export default App;
