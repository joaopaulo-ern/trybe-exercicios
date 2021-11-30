let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let i = 0; i<numbers.length-1; i+=1){     
    let aux = numbers[i] * numbers[i+1]
    numbers[i] = aux
}
let a = numbers[numbers.length-1]*2
numbers[numbers.length-1] = a
console.log(numbers)