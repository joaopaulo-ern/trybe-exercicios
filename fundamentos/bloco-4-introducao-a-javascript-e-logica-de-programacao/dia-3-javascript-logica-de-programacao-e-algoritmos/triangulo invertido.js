n=6
let l = []
for (let i = 1; i<=n; i+=1){
    for (let j = n; j>=1; j-=1){
        if (j-i >= i) {
            l = l+' '
        } else {
            l = l+'*'
        }
    }
    console.log(l)
}   

//certo
n=6
for (let i = 1; i<=n; i+=1){
    let l = []
    for (let j = n-i; j>=0; j-=1){
        l=l+' '
    }
    for (let w = i; w>0; w-=1){
        l=l+'*'
    }
    console.log(l)
}
