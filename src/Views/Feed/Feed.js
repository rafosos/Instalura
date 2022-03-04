import React, { Fragment, useEffect, useState } from 'react';
//import type {Node} from 'react';
import { Text, FlatList, Image, Dimensions, ScrollView, useWindowDimension, Platform, StatusBar} from 'react-native';
import { Header } from '../../Components/Header';
import { ImageFeed } from '../../Components/ImageFeed';
import readImages from '../../api/feed';
import { Comments } from '../../Components/Comments';

//const App: () => Node = () => {
const Feed = () => {
  const [images, setImages] = useState([]); 
  //images = variavel que representa o estado que queremos guardar
  //setImages = função que altera o valor do estado(images)
  useEffect(()=>{    
  readImages(setImages);
}, [])

  let statusBar = Platform.OS == "android" ? 0 : 10;
  return (
    <ScrollView style={{marginTop: statusBar}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={images}
        //keyExtractor = {(item) =>item.id.toString()}
        renderItem={({item}) =>
        <Fragment>
          <Header userName={item.userName} userUrl={item.userURL}/>
          <ImageFeed numlikes={item.likes} url={item.url} userName={item.userName} description={item.description} />
          <Comments comments={item.comentarios} />
       </Fragment>}
      />
     
    </ScrollView>
  );
};


export default Feed;
