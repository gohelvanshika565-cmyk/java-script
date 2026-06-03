function Login(){
    let userEmail = document.getElementById('useremail').value;
    let Password = document.getElementById('password').value;

    let msg="";

    let correctEmail = "vanshugohel131@gamil.com";
    let correctPassword = "131vanshi";

    if(userEmail ==="" && Password ===""){
        msg = "All fields are required.!";
    }

    else if (userEmail === correctEmail && Password === correctPassword){
        msg = "Login Successfully.!";
    }
    else{
        msg =" Incorrect Email & Password.!";
    }

    document.getElementById('msg').innerText = msg;
}