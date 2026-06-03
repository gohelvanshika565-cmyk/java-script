let images = [
    "Image/image1.jpg",
    "Image/image2.jpg",
    "Image/image3.jpg"
];


let index = 0;

function nextImage(){

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("slide").src =
    images[index];
}

function prevImage(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    document.getElementById("slide").src =
    images[index];
}