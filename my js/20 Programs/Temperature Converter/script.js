function toFahrenheit(){

    let temp =
    document.getElementById("temp").value;

    let fahrenheit =
    (temp * 9/5) + 32;

    document.getElementById("result").innerHTML =
    fahrenheit + " °F";
}

function toCelsius(){

    let temp =
    document.getElementById("temp").value;

    let celsius =
    (temp - 32) * 5/9;

    document.getElementById("result").innerHTML =
    celsius.toFixed(2) + " °C";
}

// if(temp === ""){
//     alert("Please Enter Temperature");
//     return;
// }