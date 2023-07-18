let string ="";
let buttons=document.querySelectorAll("button");
let input=document.querySelector("input");
let arr=Array.from(buttons);
arr.forEach(button=> {
    

button.addEventListener("click",function(e){

if(e.target.innerHTML=="AC"){
    string="";
    input.value=string;
}else if(e.target.innerHTML=="DEL"){
    string=string.slice(0,-1);
    input.value=string;
}
else if(e.target.innerHTML=="="){
    string=eval(string);
    input.value=string;
    string="";
}else{
    string+=e.target.innerHTML;
    input.value=string;
    
}

});
});