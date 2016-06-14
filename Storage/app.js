/**
 * Created by adela on 2016/6/14.
 */


localStorage.lastname="alice";
document.write("Last name:"+localStorage.lastname+'<br/>');

/*if(localStorage.pagecount){
    localStorage.pagecount = Number(localStorage.pagecount)+1;
}else{
    localStorage.pagecount = 1;
}
document.write("Visits:"+localStorage.pagecount+"time(s)."+'<br/>');*/

var text,btn,female,male,ln,button;
window.onload=function(){
    input();
    input1()
}
function input(){
    text = document.getElementById("text");
    if(localStorage.input){
        text.value = localStorage.input;
    }
    btn =document.getElementById("btn");
    btn.onclick = function(){
        localStorage.input = text.value;
    }
}

function input1(){
    female = document.getElementById("female");
    male = document.getElementById("male");
    ln=document.getElementById("ln");
    if(localStorage.data){
        female.value = localStorage.data;
        male.value=localStorage.data;
        ln.value=localStorage.data;
    }

}
