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