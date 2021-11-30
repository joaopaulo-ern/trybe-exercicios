let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*1*/
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])
console.log(numbers[6])
console.log(numbers[7])
console.log(numbers[8])
console.log(numbers[9])

/*2*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
for (let i = 0; i<numbers.length; i+=1) {
    sum = numbers[i]+sum
}
console.log("Soma igual a:",sum)

/*3*/
let media = sum/numbers.length
console.log("Média igual a:", media)

/*4*/
if (media>20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual que 20")
}

/*5*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let a = 0;
for (let i = 0; i < numbers.length; i+=1) {
   if ( numbers[i] > a ) {
      a = numbers[i];
   }
}

console.log(a)

/*6*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
a=[];

for (let i = 0; i < numbers.length; i+=1){
    if (numbers[i]%2 == 1){
        a.push(numbers[i])
    } 
    if (a.length == 0) {
        a.push("Nenhum valor ímpar encontrado")
    }
}
console.log(a)

/*7*/
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
a = numbers[0];

for (let i = 0; i < numbers.length; i+=1) {
    if ( numbers[i] < a ) {
       a = numbers[i];
    }
 }
 
 console.log(a)

 /*8*/
let a = []
 for (let i = 1; i<=25; i+=1){
     a.push(i)
 }
 console.log(a)

  /*9*/
let a = []
 for (let i = 1; i<=25; i+=1){
     a.push(i)
 }
 let b = []
for (let j = 0; j<a.length; j+=1){
    b.push(a[j]/2)
}
console.log(b)