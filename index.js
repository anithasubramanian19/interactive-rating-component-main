const interactive = document.querySelector(".interactive")
const oneElement = document.querySelector('.one')
const twoElement = document.querySelector('.two')
const threeElement = document.querySelector('.three')
const fourElement = document.querySelector('.four')
const fiveElement = document.querySelector('.five')
const thankyou = document.querySelector(".thank-you")
const button = document.querySelector("button")
const span = document.getElementById("rating")
const array = [1,2,3,4,5]
button.addEventListener('click', function(e){
    e.preventDefault
    interactive.classList.add('hidden')
    thankyou.classList.remove('hidden')
})
thankyou.addEventListener('click', function(e){
    interactive.classList.remove('hidden')
    thankyou.classList.add('hidden')
})
oneElement.addEventListener('click', function(e){
    e.preventDefault
    
    span.innerText = `You selected ${array[0]} out of 5 `
    
})
twoElement.addEventListener('click', function(e){
    e.preventDefault
    
    span.innerText = `You selected ${array[1]} out of 5 `
    
})
threeElement.addEventListener('click', function(e){
    e.preventDefault
    
    span.innerText = `You selected ${array[2]} out of 5 `
    
})
fourElement.addEventListener('click', function(e){
    e.preventDefault
    
    span.innerText = `You selected ${array[3]} out of 5 `
    
})
fiveElement.addEventListener('click', function(e){
    e.preventDefault
    
    span.innerText = `You selected ${array[4]} out of 5 `
    
})


