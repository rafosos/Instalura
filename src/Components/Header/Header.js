import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './style';

const Header = ({userName, userUrl}) =>{

    return(
        <View style={styles.container}>
            <Image 
                source={{uri: userUrl}}
                style={styles.imgUser}/>
            <Text>{userName}</Text>
        </View>
    );
}


export default Header;