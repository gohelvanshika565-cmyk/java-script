function changeBackground(mybg){
    if(mybg === 'color'){
        document.body.style.backgroundColor = "pink";
        document.body.style.backgroundColor = "none"
    }
    else if(mybg === 'gradiant'){
        document.body.style = "background:linear-gradient(rgba(254, 40, 40, 0.785),rgba(71, 222, 222, 0.895))";
    }
    else if(mybg === 'image'){
        document.body.style = "background-image: url('https://i.pinimg.com/736x/6a/80/94/6a809480bd503ce1679de1598d37b306.jpg')";

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
    else{
        alert("Invalid Type.!!");
    }
}