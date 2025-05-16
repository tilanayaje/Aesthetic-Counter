const button = document.getElementById('button');
const count = document.getElementById('val');

let message = document.getElementById('message');

let valNum = Number(localStorage.getItem("name"));
if (isNaN(valNum)) {
    valNum = 0;
}

count.textContent = valNum;

button.addEventListener("click", myFunction);

function myFunction() {
    valNum += 1;
    count.textContent = valNum;
    localStorage.setItem("name", valNum);
    message.textContent = "Counter: " + valNum ;
}
