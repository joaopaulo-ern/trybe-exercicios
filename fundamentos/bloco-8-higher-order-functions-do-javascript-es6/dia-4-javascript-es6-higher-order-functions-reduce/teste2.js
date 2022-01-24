// Quantas pessoas votaram?

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ];

function totalVotes(arr) {
    return arr.reduce(((acumulador, elemento) => (elemento.voted) ? acumulador+=1 : acumulador), 0)
}

console.log(totalVotes(voters)); // 7 
/////////////////////////////////////////////////////
// Quanto custaria para comprar todos os itens de uma vez?

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
    ];

function shoppingSpree(arr) {
    return arr.reduce(((acumulador, elemento) => acumulador + elemento.price), 0)
}    
console.log(shoppingSpree(wishlist)); // 227005 
/////////////////////////////////////////////////////
/**
* Dado um array de votantes em potencial,
* retorne um objeto com as seguintes chaves:
* youngPeople: numero total de pessoas com idade entre 18 e 25
* youngVotes: numero total de pessoas nessa faixa que votou
* midPeople: numero total de pessoas com idade entre 26 e 55
* midVotes: numero total de pessoas nessa faixa que votou
* oldPeople: numero total de pessoas com mais de 55 anos
* oldVotes: numero total de pessoas nessa faixa que votou
*/

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:65, voted:true},
    {name:'Tami' , age: 64, voted:true},
    {name: 'Mary', age: 41, voted: false},
    {name: 'Becky', age: 53, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ];
    
function voterResults(arr) {
    return {
        youngPeople: arr.reduce(((acumulador, elemento) => (elemento.age >= 18 && elemento.age <= 25) ? acumulador+=1 : acumulador), 0),
        youngVotes: arr.reduce(((acumulador, elemento) => (elemento.age >= 18 && elemento.age <= 25 && elemento.voted) ? acumulador+=1 : acumulador), 0),
        midPeople: arr.reduce(((acumulador, elemento) => (elemento.age >= 26 && elemento.age <= 55) ? acumulador+=1 : acumulador), 0),
        midVotes: arr.reduce(((acumulador, elemento) => (elemento.age >= 26 && elemento.age <= 55 && elemento.voted) ? acumulador+=1 : acumulador), 0),
        oldPeople: arr.reduce(((acumulador, elemento) => (elemento.age >= 56) ? acumulador+=1 : acumulador), 0),
        oldVotes: arr.reduce(((acumulador, elemento) => (elemento.age >= 56 && elemento.voted) ? acumulador+=1 : acumulador), 0),
    }
}
console.log(voterResults(voters))