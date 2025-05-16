const button = document.getElementById('button');
const count = document.getElementById('val');

let valNum = Number(localStorage.getItem("name"));
if (isNaN(valNum)) {
    valNum = 0;
}

button.addEventListener("click", myFunction);

function myFunction() {
    let valText = document.getElementById("val").textContent;
    let valNum = Number(valText);
    valNum += 1;
    document.getElementById("val").textContent = valNum;
    localStorage.setItem("name", valNum);
}
