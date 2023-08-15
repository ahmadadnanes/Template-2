let btn = document.querySelector("button");
let ul = document.getElementById("classic");
btn.onclick = function(){
    if(ul.className == "classic active"){
        ul.classList.remove("active");
    }
    else{
        ul.classList.add("active");
    }
}

let up = document.getElementById("up");

window.onscroll = scrollbtn;
function scrollbtn(){
    if(window.scrollY >= 100){
        up.style.display = "block";
    }
    else{
        up.style.display = "none";
    }
}

up.onclick = () =>{
    window.scrollTo({
        top:0 ,
        behavior:"smooth"
    })
}

i = 0 ; images = [];

images[0] = '../images/landing.jpg';
images[1] = '../images/shuffle-04.jpg';
images[2] = '../images/subscribe.jpg';

bull1 = document.getElementById("bull1");
bull2 = document.getElementById("bull2");
bull3 = document.getElementById("bull3");
land = document.getElementById("land");

bull1.onclick = () =>{
    land.style.backgroundImage = `url(${images[0]})`;
    addactive(bull1);
}

bull2.onclick = () =>{
    land.style.backgroundImage = `url(${images[1]})`;
    addactive(bull2);
}

bull3.onclick = () =>{
    land.style.backgroundImage = `url(${images[2]})`;
    addactive(bull3);
}

function addactive(element){
    if(element.className == "active" )
        element.classList.remove("active");
    else
        element.classList.add("active");
        
}

right = document.getElementById("right");
left = document.getElementById("left");


right.onclick = () =>{
    land.style.backgroundImage = `url(${images[i]})`;

    if(i < images.length - 1)
        i++;
    else
        i = 0;
}

left.onclick = () =>{
    land.style.backgroundImage = `url(${images[i]})`;

    if(i > 0)
        i--;
    else
        i = 0;
}


