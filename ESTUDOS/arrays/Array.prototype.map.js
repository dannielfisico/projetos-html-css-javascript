/*O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
*/
const frutas = ['laranja', 'maçã', 'abacaxi','pêra']

function comerFruta(fruta){
    console.log(`Coma ${fruta}.`)
}

frutas.map(comerFruta)