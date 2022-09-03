let myOutput=document.getElementById('text');
function display(number){
    myOutput.value+=number;
}
function calculate(){
    try{
        if(myOutput.value==="")
        myOutput.value="";
        else
        myOutput.value=eval(myOutput.value);
    }
    catch(err){
        alert("Invalid");
    }
    
}
function Clear(){
    myOutput.value="";
}
function del(){
    myOutput.value=myOutput.value.slice(0,-1);
}



var check=0;
const switchBox=document.querySelector(".switch");
const header=document.querySelector(".header");
const calculator=document.querySelector(".calculator");
switchBox.addEventListener("click",()=>{
    if(check==0){
        calculator.classList.add("newBgColor");
        header.classList.add("newBgColor");
        check=1;
        
    }
    else{
        calculator.classList.remove("newBgColor");
        header.classList.remove("newBgColor");
        check=0;
    }
    
})