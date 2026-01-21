


function addTodoList(newText){
    /** @type {HTMLLIElement} */
    const li = document.createElement('li')
    /** @type {HTMLButtonElement} */
    const button = document.createElement('button')
    button.textContent = 'Supprimer'
    button.classList.add('delete-btn')

    button.addEventListener('click', (event)=>{

        parent = event.currentTarget.parentNode
        parent.remove()
    })

    li.classList.add('todo-item')

    if(newText){
        li.append(newText)
        li.appendChild(button)
        ul =  document.querySelector('ul')
        ul.appendChild(li)
    }
}

const addButton = document.querySelector('#ajouter')

const newTodo = document.querySelector('#nouveauTodo')
let newText = ''

newTodo.addEventListener('change', (e) => {
    newText = e.currentTarget.value
    console.log(newText)
})



addButton.addEventListener('click',  () => {
    addTodoList(newText)
    newTodo.value = ''
})


newTodo.addEventListener('keydown' , (event) => {
    newText = event.currentTarget.value
    if(event.key == 'Enter' ){
        addTodoList(newText)
    newTodo.value = ''

    }

})


