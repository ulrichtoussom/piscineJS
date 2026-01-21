

/**
 * 
 * @param {Array} table 
 */
function sommeTableau(table){

    const somme = table.reduce((acc, value)=>{
        return acc + value
    },0)

    return somme 

}

const tableau = [10,5,7,9,0,4]
console.log(sommeTableau(tableau))

