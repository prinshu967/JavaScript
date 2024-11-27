console.log("Welocom to time interval Tutorial")
setTimeout(()=>{
    console.log("Prinshu ! You are using SetTimeout")
},4000);
console.log("Satement writeen after callback");
console.log("Now I am going To use setInterval");
console.log("It is mainly used for repeatly doing the same pice of work/task after the finxed peroid of intervals");
setInterval(()=>{
    console.log("This part of code will be executed after every 2 sec");

},2000);  

// Setinterval has unique id that can be used to stop it 
let id=setInterval(()=>{
    console.log("Stop the interval");

},4000) ;

clearInterval(id);
 
