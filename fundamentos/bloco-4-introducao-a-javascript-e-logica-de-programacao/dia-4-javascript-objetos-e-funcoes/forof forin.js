// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// };

// for (let i in names){
//   console.log("oi "+names[i]);
// }

// //
// let valorObjeto = []

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };
// for (let i in car){
//   console.log("chave é '"+i+"' e o valor é '"+car[i]+"'");
//   valorObjeto.push(car[i])
// }
// console.log(valorObjeto);

// Bem-vinda, Margarida

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // console.log("Bem-vinda, "+info["personagem"]);

// info["recorrente"] = 'sim'
// //console.log(info["recorrente"]);

// // for (let i in info){
// //   console.log(i);
// // }

// // for (let i in info){
// //   console.log(info[i]);
// // }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell'+"'"+'s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// }

// for (let i in info) {
//   if(info[i] != info2[i]){
//   console.log(info[i]+" e " +info2[i])
//   } else {
//     console.log('Ambos recorrentes // Atenção para essa última linha!')
//   }
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos:[
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ]
};

// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

leitor['livrosFavoritos'][1] = 
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
// console.log(leitor['livrosFavoritos'][1]);

console.log(leitor['nome']+' tem '+leitor['livrosFavoritos'].length+" livros favoritos");