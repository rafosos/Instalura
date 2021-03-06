import {Dimensions, StyleSheet} from 'react-native';

const largurad = Dimensions.get("screen").width;

 const styles = StyleSheet.create({
   imgfeed: {
     width: largurad,
     height: largurad
   },
   likeIcon: {
     width: 35,
     height: 35,
     marginLeft: 10,
     marginRight: 10,
     marginTop: 5,
     marginBottom: 0
   },
   photoDescription: {
     marginLeft: 10,
     marginBottom: 15,
     color: '#474747'
   },
   bold: {
    fontWeight: 'bold'
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
 });

 export default styles;