

const voyelles = ['a','e','i','u','o']

const phrase = 'ulrich'

function CountVoyelle(){

    const nb_voyelles = voyelles.filter( voyelle => {

        if(phrase.toLowerCase().includes(voyelle.toLowerCase())){
            return true
        }
    })

    return {taille:nb_voyelles.length, nb_voyelles}
}

const {taille, nb_voyelles} = CountVoyelle('ulrich')

console.log (`nombre de voyelle ${taille} / (${nb_voyelles})`)