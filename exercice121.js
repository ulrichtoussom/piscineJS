
/** @type { HTMLFormElement} */
const form =  document.querySelector('#monFormulaire')

console.log(form)
form.addEventListener('submit', (event) => {
// Empecher la div de se recharger 
    event.preventDefault()
// recuperation des donnee envoye par le formulaire 
    formData = new FormData(form)

// creation de la div d'affiche du status d'envoie 
    const divStatus = document.createElement('div')
    divStatus.classList.add(...['alert', 'alert-success', 'container'])
    divStatus.textContent = `Formulaire soumis ! Nom: ${formData.get('username')}, Email: ${formData.get('email')}`
// Insertion de la divSatut
    /** @type {HTMLBodyElement} */
    const body = document.querySelector('body')
    body.insertBefore(divStatus, body.firstElementChild)

})