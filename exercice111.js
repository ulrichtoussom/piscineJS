

const compteurElement = document.querySelector('#compteur')
let compteur = compteurElement.textContent * 1
const increaseElement  =  document.querySelector('#incrementer')
const decreaseElement  =  document.querySelector('#decrementer')
const reset =  document.querySelector('#reset')

//console.log(increaseElement, decreaseElement)

increaseElement.addEventListener('click' , ()=>{
    compteur++
    compteurElement.textContent = compteur 

})

decreaseElement.addEventListener('click' , ()=>{
    compteur >0 ? compteur-- : 0
    compteurElement.textContent = compteur 

})

reset.addEventListener('click' , ()=>{
    compteurElement.textContent = 0*1 

})