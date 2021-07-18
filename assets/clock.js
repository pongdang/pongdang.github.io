var clock=document.querySelector("#clock");
clock.innerHTML='<h1>'+(new Date().toLocaleDateString())+' '+(new Date().toLocaleTimeString())+'</h1>'
setInterval(() => {
    clock.innerHTML='<h1>'+(new Date().toLocaleDateString())+' '+(new Date().toLocaleTimeString())+'</h1>'
}, 1000);