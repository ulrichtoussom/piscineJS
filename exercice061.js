


function MaxTable(table){

    let max = 0
    for( const value of table){

        if(value > max) {
            max = value 
        }

    }
    return max 
}

const table = [10,19,3,7,20,21]

const maximum = MaxTable(table)

console.log(maximum)