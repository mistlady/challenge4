function validation()
{
const email = document.querySelector("#email");
const form = document.getElementById("form");
const text = document.getElementById("text");
const btn = document.querySelector('#btn');

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Valid email address";
    text.style.color = "#00ff00";
    email.style.borderColor = "#00ff00";
    email.style.backgroundColor = "white";
    email.style.color = "#00ff00";
    btn.addEventListener('click', () => {
    const page1 = document.querySelector('#container');
    const page2 = document.querySelector('#content');
    page1.style.display = 'none';
    page2.style.display = 'block';
  });
}
else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Valid email required";
    text.style.color = "hsl(4, 100%, 67%)";  
    email.style.borderColor = "#FF6666";
    email.style.backgroundColor = "#ffcccc";
    email.style.color = "#FF6666";
}
if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00"; 
}
}
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    const page1 = document.querySelector('#container');
    const page2 = document.querySelector('#content');
    page2.style.display = 'none';
    page1.style.display = 'block';
});


