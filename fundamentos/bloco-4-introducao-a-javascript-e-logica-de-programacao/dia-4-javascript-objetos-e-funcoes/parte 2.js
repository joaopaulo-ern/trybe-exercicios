// function palindromo(palavra){
//   let verifica = palavra.split("").reverse().join("")
//   if (verifica === palavra){
//     return true
//   } else {
//     return false
//   }
// }
// let palavra = "asarara"
// console.log(palindromo(palavra));

// function maiorNum (array) {
//   let maior = array[0]
//   for (let i = 0; i<array.length; i+=1){
//     if(array[i]>maior){
//       maior  = array[i]
//       position=i
//     }
//   }
//   return position
// } 
// let array = [2, 3, 6, 7, 10, 1,11]
// console.log(maiorNum (array));


// function menorNum (array) {
//   let menor = array[0]
//   let position
//   for (let i = 0; i<array.length; i+=1){
//     if(array[i]<menor){
//       menor  = array[i]
//       position=i
//     }
//   }
//   return position
// } 
// let array = [2, 3, 6, 7, 10, 1,11]
// console.log(menorNum (array));

// function maiorNome (nome){
//   let comparador = nome[0]
//   for (let i = 0; i<nome.length; i+=1){
//      if(comparador.length<nome[i].length){
//        comparador = nome[i]
//      }
//   }
//   return comparador
// }
// let nome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
// console.log(maiorNome (nome));

// function repete(num) {
//   let repeticoes = []
//   for (let i = 0; i<num.length; i+=1){
//     let count = 0
//     for (let j = 0; j<num.length; j+=1 ){
//       if(num[i]===num[j]){
//         count = count+1
//       }
//     }
//     repeticoes.push(count)
//   }
//   maior=repeticoes[0]
//   for (let i = 0; i<repeticoes.length; i+=1){
//     if(repeticoes[i]>maior){
//       maior = repeticoes[i]
//       position=i
//     }
//   }
//   return num[position]
// }
// let num = [2, 3, 2, 5, 8, 2, 3, 3, 3,5,5,5,5,5,5,5,5,5]
// console.log(repete(num));

// function somatorio (num){
//   let count = 0
//   for(let i = num; i>0; i-=1){
//     count = count + (i)
//   }
//   return count
// }
// let num = 5
// console.log(somatorio (num));

// function fimPalavra (word, end){
//   let comparador = []
//   for (let i = end.length; i>0; i-=1){
//     comparador = comparador + (word[word.length-i])
//   }
//   if(comparador==end){
//     return true
//   } else {
//     return false
//   }
// }
// let word = 'caroona'
// let end = 'ona'
// console.log(fimPalavra (word, end));
