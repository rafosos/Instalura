import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    bold: {
        fontWeight: 'bold'
      },
    commentDate: {
        alignSelf: "flex-end"
    },
    photoDescription: {
        marginLeft: 7,
        color: '#828282'
    },
    sendComment: {
        height: 25,
        width: 25,
        marginRight: 7
    }
});

export default styles;