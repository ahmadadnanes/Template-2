let btn = document.querySelector("button");
let ul = document.getElementById("classic");
let time = 2000;
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

images[0] = "../images/landing.jpg";
images[1] = "../images/shuffle-04.jpg";
images[2] = "../images/subscribe.jpg";

bull = document.getElementsByClassName("bullet");
land = document.getElementById("land");

right = document.getElementById("right");
left = document.getElementById("left");

right.addEventListener('click' , () =>{
    land.style.backgroundImage = `url(${images[i]})`;
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    
    if(i == 0){
        bull[i].classList.add("active");
        bull[i + 1].classList.remove("active");
        bull[i + 2].classList.remove("active");
    }
    else if(i == 1){
        bull[i].classList.add("active");
        bull[i - 1].classList.remove("active");
        bull[i + 1].classList.remove("active");
    }
    else{
        bull[i].classList.add("active");
        bull[i - 1].classList.remove("active");
        bull[i - 2].classList.remove("active");
    }
})

left.addEventListener('click' , () =>{
    land.style.backgroundImage = `url(${images[i]})`;
    if(i != 0){
        i--;
    }
    else{
        i = 0;
    }


    if(i == 0){
        bull[i].classList.add("active");
        bull[i + 1].classList.remove("active");
        bull[i + 2].classList.remove("active");
    }
    else if(i == 1){
        bull[i].classList.add("active");
        bull[i - 1].classList.remove("active");
        bull[i + 1].classList.remove("active");
    }
    else{
        bull[i].classList.add("active");
        bull[i - 1].classList.remove("active");
        bull[i - 2].classList.remove("active");
    }
})




const media = window.matchMedia('(max-width: 1209px)');

if(media.matches){
    function changeimg() {
        land.style.backgroundImage = `url(${images[i]})`
        if(i < images.length - 1)
            i++;
        else
            i = 0;
        setTimeout("changeimg()" , time)
    }
    window.onload = changeimg();
}


