//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
/*function checkarPalindromo(palindromo){
  for(let i in palindromo){
      if(palindromo[i] !== palindromo[(palindromo.length-1)-i])
      {
        return false
      }
            else{
                    return true
    }
  }
}
console.log(checkarPalindromo('arara'));
console.log(checkarPalindromo('desenvolvimento'));*/
// - 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
/*function enteros(array){
    let valorMaior=0;
    for(let index in array){
        if(array[valorMaior]<array[index]){
            valorMaior=index
        }
    }
return valorMaior;
}
console.log(enteros([2, 3, 6, 7, 10, 1]));
*/
/*3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function enteros(array){
    let valorMenor=0;
    for(let index in array){
        if(array[index]<array[valorMenor]){
            valorMenor=index
        }
    }
return valorMenor;
}
console.log(enteros([2, 4, 6, 7, 10, 0, -3]));*/

//4 - achar a maior palavra de uma array
//function maiorPalavra(palavras) {
//    let maiorPalavra = palavras[0];
//    for (let indice in palavras) {
//      if (maiorPalavra.length < palavras[indice].length) {
//        maiorPalavra = palavras[indice];
//      }
//    }
//    return maiorPalavra;
//  }
//  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 



//questão 5
//let a = [2, 3, 2, 5, 8, 2, 3]
//let num = []
//for (let i in a){
//  let cont = 0
//  for (let j = 0; j<a.length; j+=1){
//    if(a[i] == a[j]){
//    cont = cont+1
//  }
//  }
//  num.push(cont)
//}
//function enteros(array){
//    let valorMaior=0;
//    for(let index in array){
//        if(valorMaior<array[index]){
//            valorMaior=array[index]
//        }
//    }    
//    return a[num.indexOf(valorMaior)]
//}
//let array = num
//console.log(enteros(array))

