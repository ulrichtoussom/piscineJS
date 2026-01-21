


const h1 =  document.getElementById('titre')
const paragraphe = document.querySelectorAll('.paragraphe')
const allLi = document.querySelectorAll('li')

//console.log(h1, paragraphe,allLi)

console.log(h1.textContent)

paragraphe.forEach((Element) => {
    console.log(Element.textContent)
})
allLi.forEach((Element) => {
    console.log(Element.textContent)
})