const getLikeIcon = (liked) => {
    if(liked){
        return require("../../res/img/s2-checked.png")
    } else {
        return require("../../res/img/s2.png");
    }
}

const changeLike = (liked, likes) =>{
    let num = likes;
    if(liked){
        num--;
    } else{
        num++;
    }
    return [num, !liked];
}

export {getLikeIcon, changeLike}