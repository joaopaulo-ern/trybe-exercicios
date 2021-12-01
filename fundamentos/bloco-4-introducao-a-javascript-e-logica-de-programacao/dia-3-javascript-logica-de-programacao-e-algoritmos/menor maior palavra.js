let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0]

for (let i = 0; i<array.length; i+=1){
  if(array[i].length<menor.length){
  menor = array[i]
  }
}
console.log(menor)