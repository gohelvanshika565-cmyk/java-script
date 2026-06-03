function loginpage(){
    let email = document.getElementById('emailid').value;
    let password = document.getElementById('password').value;

    if(email === "" || password ===""){
        alert("All Field are Required.!!")
        return;
    }
    else if(email === "vanshi111@gmail.com" && password === "vvvvv"){
        window.location.href = 'index.html';
    }
    else if (email === "vanshu222@gamil.com" && password === "vvvvvv"){
        window.location.href = 'admin.html';
    }
    else{
        alert("Invalid email and password.!!");
    }
}