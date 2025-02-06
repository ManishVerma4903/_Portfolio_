var nav = document.getElementById("mobile-nav")
let bars = document.getElementById("bar");

function toggleBar() {


    if (bars.classList.contains("fa-bars")) {

        if (nav.classList.contains("hidden")) {
            nav.classList.remove("hidden");
            nav.classList.add("flex");
        }

        bars.classList.remove("fa-bars");
        bars.classList.add("fa-x");
    } else {
        if (nav.classList.contains("flex")) {
            nav.classList.remove("flex");
            nav.classList.add("hidden");
        }
        bars.classList.add("fa-bars");
        bars.classList.remove("fa-x");

    }
}


function navRemove(e){
    if(e.target.tagName =='A' || e.target.tagName =='I'){
        nav.classList.remove("flex");
        nav.classList.add("hidden");
        bars.classList.add("fa-bars");
        bars.classList.remove("fa-x");
  

    } 
}
nav.addEventListener('click',navRemove)



const scriptUrl = "https://script.google.com/macros/s/AKfycbymWcfc6gaWVXzRZeAScjbBFRaqqH36tlLYZAckV-ut5eKAmRrs6aqnA8_yVe49wiid/exec"
const form = document.forms['portfolio']
form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptUrl,{method:'POST', body:new FormData(form)})
    .then(response => alert("Response submitted"))
    .then(()=>{window.location.reload();})
    .catch(error => console.log('Error',error.message))
} )