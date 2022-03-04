import { Platform } from "react-native";

const readImages = async(callback) =>{
      let url = Platform.OS == "android" ? "10.0.2.2" : "localhost";
      
      const imgsHTTP = await fetch(`http://${url}:3030/feed`);
      const imgsJSON = await imgsHTTP.json();
      callback(imgsJSON);
    }

export default readImages;