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
