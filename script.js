const oocEl = document.getElementById('open-or-closed')

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', 
    ()=>nav.classList.toggle('active'))


//Our time function will determine if the shop displays open or closed
function timeFunc() {
    var date = new Date();
    var hour = date.getHours();

    if(hour < 7 || hour > 18) {
        oocEl.innerHTML = `We are open now, come on in!`
    } else {
        oocEl.innerHTML = `We are open now, come on in!`
    }

}
timeFunc()