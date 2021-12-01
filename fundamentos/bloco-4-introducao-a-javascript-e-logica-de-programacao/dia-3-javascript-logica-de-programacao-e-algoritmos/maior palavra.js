let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]

for (let i = 0; i<array.length; i+=1){
  if(array[i].length>maior.length){
  maior = array[i]
  }
}
console.log(maior)
