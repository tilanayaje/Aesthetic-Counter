const button = document.getElementById('button');
button.addEventListener("click", myFunction);
const count = document.getElementById('val');

function myFunction() {
    let valText = document.getElementById("val").textContent;
    let valNum = Number(valText);
    valNum += 1;
    document.getElementById("val").textContent = valNum;
    
    localStorage.setItem("name", valNum);
    console.log(localStorage.getItem("name"));
}
