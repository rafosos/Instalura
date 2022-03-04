import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import React, {Fragment, useState} from 'react';
import { getLikeIcon, changeLike } from '../../api/likes';

const ImageFeed = ({numlikes, url, userName, description}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(numlikes);
    const onLikeClicked = () => {
        const [num, likedN] = changeLike(liked, likes);
        setLikes(num);
        setLiked(likedN);
    }

    return(
        <Fragment>
                <Image 
                source={{uri: url}}
                style={styles.imgfeed}
                />
                <View style={styles.container}>
                    <TouchableOpacity onPress={onLikeClicked}>
                        <Image
                            source={getLikeIcon(liked)} 
                            style={styles.likeIcon}
                            />
                    </TouchableOpacity>
                    <Text>{likes}</Text>
                </View>
                <Text style={styles.photoDescription}>
                    <Text style={styles.bold}>{userName} </Text> 
                    {description}
                </Text>
        </Fragment>
    )      
}

export default ImageFeed;