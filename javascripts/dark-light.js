  window.addEvelentListener("load", (event)=>{
window.parent.postMessage("","*");
}, false);

window.addEventListener("message", (event)=>{
var origin = event.origin;
if(origin === "https://criptonautas.co"){
switch(event.data){
case "light":
document.body.classList = ['light'];
break;
case "dark":
document.body.classList = ['dark'];
break;
}
}
},false);