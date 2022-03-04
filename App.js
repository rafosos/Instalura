import React, { Fragment, useEffect, useState } from 'react';
//import type {Node} from 'react';
import { Text, FlatList, Image, Dimensions, ScrollView, useWindowDimensions} from 'react-native';
import { Header } from './src/Components/Header';
import { ImageFeed } from './src/Components/ImageFeed';
import readImages from './src/api/feed';

//const App: () => Node = () => {
const App = () => {
  const [images, setImages] = useState([]); 
  //images = variavel que representa o estado que queremos guardar
  //setImages = função que altera o valor do estado(images)
  useEffect(()=>{    
  readImages(setImages);
}, [])

  const largura = useWindowDimensions().width;
  return (
    <ScrollView>
      <FlatList
        data={images}
        //keyExtractor = {(item) =>item.id.toString()}
        renderItem={({item}) =>
        <Fragment>
          <Header userName={item.userName} userUrl={item.userURL}/>
          <ImageFeed image={item} />
       </Fragment>}
      />
     
    </ScrollView>
  );
};


export default App;
