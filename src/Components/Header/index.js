import React, { Fragment } from 'react';
import { Text, Image } from 'react-native';
import styles from './style';

const Header = ({nomeUsuario}) =>{

    return(
        <Fragment>
            <Image 
                source={require("../../../res/img/alura.jpg")}
                style={styles.imgUser}/>
            <Text>{nomeUsuario}</Text>
        </Fragment>
    );
}


export default Header;