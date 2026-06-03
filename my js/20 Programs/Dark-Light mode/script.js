function ChangeMode(){
    document.body.classList.toggle("dark");

    let btn = document.getElementById("btn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML ="Light Mode";
    }
    else{
        btn.innerHTML ="Dark Mode";
    }
}