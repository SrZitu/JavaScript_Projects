const textId=document.getElementById('text');
const speedEl=document.getElementById('speed');
const text="I love Programming !"

let index=1;
let speed=330/speedEl.value;

writeText();
function writeText(){

    textId.innerText=text.slice(0,index);

    index++;

    if(index>text.length){
        index=1;
    }

    setTimeout(writeText,speed);

}

speedEl.addEventListener('input',(event)=>speed=300/event.target.value);