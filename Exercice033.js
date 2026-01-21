


const factoriel = function(value){
    let facto = 1
    for (let i = value ; i>1 ; i--){
        facto = facto * i 
    }
    return facto
}

console.log(factoriel(5))

