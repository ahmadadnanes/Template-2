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
