function processForm(e){
    e.preventDefault();
    console.log(e);

const chat = document.getElementById('chat');
const ul = document.getElementById('timeline');
const li = document.createElement('li');

let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()

let time =    " " + cMonth + "/" + cDay + "/"+ cYear
let time1 = ", " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

if (chat.value.length===0){
     return false;
    }
let span = document.createElement('span');
span.className = "time";
span.appendChild(document.createTextNode(time + time1))

let span2 = document.createElement('span');
span2.className = "user";
span2.appendChild(document.createTextNode("@tara-kamshad"))

let favorite = document.createElement('span');
favorite.className = "favorite";

let count = 0
favorite.addEventListener("click", checkBox)
const list = document.getElementById("timeline");

function checkBox(){
    count++
    console.log(count)
    if(count % 2 != 0){
    favorite.style.backgroundImage = "url(goldstar.png)"
    list.insertBefore(li, list.children[0]);

}
    else {
    favorite.style.backgroundImage = "url(greystar.png)"

    }

}


var textDiv = document.createElement('div');
textDiv.innerText = chat.value
textDiv.classList.add("chat-text")


li.appendChild(favorite)
li.appendChild(textDiv)
li.appendChild(span);
li.appendChild(span2);
ul.appendChild(li);

chat.value = null
return false;





}
const form = document.getElementById("send-chat");
form.addEventListener("submit", processForm);