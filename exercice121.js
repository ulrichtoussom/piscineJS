
/** @type { HTMLFormElement} */
const form =  document.querySelector('#monFormulaire')


form.addEventListener('submit', (event)=>{
// Empecher la div de se recharger 
    event.preventDefault()  
   
    const oldStatus = document.querySelector('.form-status')
    if(oldStatus){
        oldStatus.remove()
    }
// recuperation des donnee envoye par le formulaire 
    const formData = new FormData(form)

// creation de la div d'affiche du status d'envoie 
    const divStatus = document.createElement('div')
    divStatus.classList.add(...['alert', 'alert-success', 'container' , 'form-status'])
    divStatus.textContent = `Formulaire soumis ! Nom: ${formData.get('username')}, Email: ${formData.get('email')}`
// Insertion de la divSatut
    /** @type {HTMLBodyElement} */
    const body = document.querySelector('body')
    body.insertBefore(divStatus, body.firstElementChild)

})