const button = document.getElementsByClassName("btn")
const submit = document.querySelector(".submit")
const interactive = document.querySelector(".interactive")
const thankYou = document.querySelector(".thank-you")
const rating = document.querySelector("#rating")
for(let i = 0; i< button.length; i++){
    let buttonClicked = button[i]
    buttonClicked.addEventListener('click', updateColor)
}
function updateColor(event){
    const clicked = event.target

    clicked.style.background = "hsl(217, 12%, 63%)"
    for(let i = 0; i<clicked.innerText.length; i++){
        let rate = clicked.innerText[i]
        rating.innerText = `You selected ${rate} out of 5`
       
    }
    
    submit.addEventListener('click', submitUpdate)
    
    
}

function submitUpdate(){
    // event.preventDefault
        interactive.style.display = "none"
        thankYou.classList.remove("hidden")
    }