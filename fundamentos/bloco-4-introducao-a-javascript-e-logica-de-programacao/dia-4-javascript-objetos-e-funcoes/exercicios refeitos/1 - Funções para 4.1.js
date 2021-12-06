//angulo triangulo
function anguloTriangulo (c1,c2,h){
  if (c1<=0 || c2<=0 || h<=0){
    console.log('false')
  }
  else if (c1+c2+h == 180) {
      return true
  }
  else {
      return false
  }
}
const c1 = 10;
const c2 = 70;
const h = 100;
console.log(anguloTriangulo (c1,c2,h)); 

//area e perimetro retangulo
function areaEPerimetroRetangulo(base, height){
  let dados = {
    area: (base*height),
    perimetro: (base*2)+(height*2),
  }
  return dados
}
const base = 5;
var height = 8;
console.log(areaEPerimetroRetangulo(base, height))

// lucro
function lucro(valorVenda, valorCusto){
  let calc = {
    valorCustoTotal: 1.2*valorCusto,
    lucro: valorVenda - (1.2*valorCusto),
  }
if (valorVenda<0 || valorCusto<0) {
    return 'valor inválido'
}
else {
    return calc
}
}
const valorVenda = 100
const valorCusto = -110
console.log(lucro(valorVenda, valorCusto))

// maior de tres
function maiorDeTres (a,b,c){
  if (a>b && a>c) {
    return a
  }
  else if (b>c){
    return b
  }
  else {
    return c
  }
}
const a = 5;
const b = 7;
const c = 7;
console.log(maiorDeTres (a,b,c));

//maior
function maior (a1,b1){
  if (a1>b1) {
    return a1
  }
  else {
    return b1
  }
}
const a1 = 3;
const b1 = 2;
console.log(maior (a1,b1));

//movimento xadrez
function movimentoXadrez(peça){
  peçax = peça.toLowerCase()

  if (peçax == 'peão') {
      return 'Peão(Pawn) - Muita regra'
  }
  else if (peçax == 'cavalo') {
      return 'Cavalo(Knigth) - Move em L'
  }
  else if (peçax == 'bispo') {
      return 'Bispo(Bishop) - Move em diagonal'
  }
  else if (peçax == 'torre') {
      return 'Torre(Rook) - Move na horizontal'
  }
  else if (peçax == 'rainha') {
      return 'Rainha(Queen) - Move na horizontal e na diagonal'
  }
  else if (peçax == 'rei') {
      return 'Rei(King) - Move na horizontal e na diagonal, porém apenas uma casa'
  }
  else {
      return 'Não é uma peçax de xadrez'
  }
}
let peça = 'PEÃO';
console.log(movimentoXadrez(peça));

//nome, cidade, ano
function nomeCidadeAno (myName, birthCity, birthYear){
  let dados = {
    myName: myName,
    birthCity: birthCity,
    birthYear: birthYear,
    newBirthYear: 1995+35
  }
  return dados
}
const myName = 'João';
const birthCity = 'São Paulo';
let birthYear = 1995;
console.log(nomeCidadeAno (myName, birthCity, birthYear));

//nome por porcentagem
function nomePorPorcentagem (porcentagem){
  if (porcentagem > 100) {
      return 'valor inválido'
  } else if (porcentagem >=90){
      return 'A'
  } else if (porcentagem >= 80) {
      return 'B'
  } else if (porcentagem >= 70) {
      return 'C'
  } else if (porcentagem >= 60) {
      return 'D'
  } else if (porcentagem >= 50) {
      return 'E'
  } else if (porcentagem<50 && porcentagem>=0){
      return 'F'
  } else {
      return 'Valor inválido'
  }
}
let porcentagem = 50
console.log(nomePorPorcentagem (porcentagem));

//operadores matemáticos
function operadoresMatemáticos (operador1,operador2){
  let operações = {
    adição: operador1+operador2,
    subtração: operador1-operador2,
    multiplicação: operador1*operador2,
    divisão: operador1/operador2,
    módulo: operador1%operador2,
  }
  return [operações.adição, operações.subtração, operações.multiplicação, operações.divisão, operações.módulo]
}
operador1 = 5
operador2 = 3
console.log(operadoresMatemáticos (operador1,operador2));

// salario liquido
function salarioBase(salario){
  if (salario > 5189.82) {
      salarioinss = salario-570.88
  }
  else if (salario >= 2594.93){
      salarioinss = salario-0.11*salario
  }
  else if (porcentagem >= 1556.95) {
      salarioinss = salario-0.09*salario
  }
  else { 
      salarioinss = salario-0.08*salario
  }
  if (salarioinss > 4664.68) {
    ir = 0.275*salarioinss-869.36
  }
  else if (salarioinss >= 3751.06) {
    ir = 0.225*salarioinss-636.13
  }
  else if (salarioinss >= 2826.66) {
    ir = 0.15*salarioinss-354.8
  }
  else if (salarioinss >= 1903.99) {
    ir = 0.075*salarioinss-142.8
  }
  else {
    ir = 0
  }
  return salarioinss-ir
}
let salario = 7000
console.log(salarioBase(salario))

//sinal numero
function sinalNumero (a){
  if (a>0) {
      return 'positive'
  }
  else if (a<0) {
      return 'negative'
  }
  else {
      return 'zero'
  }
}
const a = -2;
console.log(sinalNumero (a))

//teste de aprovação
function testeDeAprovação (nota){
  if (nota >= 80) {
      return "Parabéns, você foi aprovada(o)!"
  }
  else if (nota >= 60) {
      return "Você está na nossa lista de espera"
  }
  else {
      return "Você foi reprovado"
  }
}
var nota = 80;
console.log(testeDeAprovação(nota))

// uma de tres é par
function umDeTresEPar (a,b,c) {
  if (a%2==0 || b%2==0 || c%2==0) {
      return 'true'
  }
  else {
      return 'false'
  }
}
const a = 1
const b = 1
const c = 1
console.log(umDeTresEPar (a,b,c));

// uma de tres é impar
function umDeTresEImpar (a,b,c) {
  if (a%2==1 || b%2==1 || c%2==1) {
      return 'true'
  }
  else {
      return 'false'
  }
}
const a = 1
const b = 1
const c = 1
console.log(umDeTresEImpar (a,b,c));