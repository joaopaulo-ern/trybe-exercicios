let n = 47
let a = []
for(let i = 2; i<n; i+=1){
    let b = n%i
    if(b==0){    
       a+=1    
    }
}
if(a==0){
    console.log(n, 'é primo')
} else {
    console.log(n, 'não é primo')
}


