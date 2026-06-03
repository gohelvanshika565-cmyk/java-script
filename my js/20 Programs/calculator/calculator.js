function Add(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(num1) + parseInt(num2);
    document.getElementById('ans').innerHTML = "Ans is : "+ ans;
}

function Sub(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(num1) - parseInt(num2);
    document.getElementById('ans').innerHTML = "Ans is : "+ ans;
}

function Mul(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(num1) * parseInt(num2);
    document.getElementById('ans').innerHTML = "Ans is : "+ ans;
}

function Div(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(num1) / parseInt(num2);
    document.getElementById('ans').innerHTML = "Ans is : "+ ans;
}

function Mod(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let ans = parseInt(num1) % parseInt(num2);
    document.getElementById('ans').innerHTML = "Ans is : "+ ans;
}

