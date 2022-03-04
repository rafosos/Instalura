import React, { Fragment, useState } from "react";
import { Text, Image, FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./style";

const Comments = ({comments}) =>{
    const [stateComments, setComments] = useState(comments);
    const addComment = () => {
        inputField.clear();
        console.warn(inputFieldContent);
        const newComment = {
            date: Date.now(),
            text: inputFieldContent,
            userName: "rafalrf_"
        }
        setComments([...stateComments, newComment]);
    }

    let inputField;
    let inputFieldContent = "";
    return(
        <Fragment>

            <FlatList
                
                data={stateComments}
                renderItem={({item}) =>
                <Fragment>
                    <Text style={styles.photoDescription}>
                    <Text style={styles.bold}>{item.userName} </Text>
                        {item.text}
                    </Text>
                </Fragment>
            }/>
            <View style={styles.container}>
                <TextInput
                    ref={textInput => inputField = textInput}
                    onChangeText={text => {
                        inputFieldContent = text;
                        console.warn(inputFieldContent);
                    }}
                    placeholder={"Digite seu comentário..."}
                    style={{flex:1, marginLeft: 5}}
                />
                <TouchableOpacity onPress={addComment}>
                    <Image 
                        source={require("../../../res/img/send.png")}
                        style={styles.sendComment}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
);}

export default Comments;