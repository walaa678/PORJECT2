let stars1 = document.getElementById("stars")
let moon2 = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river")
let boat6 = document.getElementById("boat")
let walaa = document.getElementById(".walaa")
window.onscroll = function(){
    let value = scrollY;
     stars1.style.left = value + "px";
     moon2.style.top  = value*4 + "px";
     mountains3.style.top = value * 2 + "px";
     mountains4.style.top= value *1.5 + "px";
     river5.style.top= value *1.2 + "px";
     boat6.style.top= value *1.2 + "px";
     boat6.style.left= value * 3 + "px";
     walaa.style.fontSize = value +"px";
     if(scrollY>=67){
        walaa.style.fontsize = 67 + "px";
        walaa.style.position="fixed" ;
        if(scrollY>=478){
            walaa.style.display="none";
        } else{
            walaa.style.display ="blok";
        }
        if(scrollY>=88)
        document.querySelector("main").style.background="linear-gradient (#376281,#10001f);"
     }else{
        document.querySelector("main").style.background="linear-gradient(#200016,#10001f);"
     }
} 