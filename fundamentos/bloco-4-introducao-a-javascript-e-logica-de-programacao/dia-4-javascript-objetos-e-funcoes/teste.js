let array = [2, 3, 6, 7, 10, 1]
let maior = array[0]
let position
for (let i = 0; i<array.length; i+=1){
  if(array[i]>maior){
    maior  = array[i]
    position=i
  }
}
console.log(position)