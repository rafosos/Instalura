const readImages = async(callback) =>{
      const imgsHTTP = await fetch("http://10.0.2.2:3030/feed");
      const imgsJSON = await imgsHTTP.json();
      callback(imgsJSON);
    }

export default readImages;