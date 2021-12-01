n=7
for (let i = 1; i<=n; i+=2){
    let l = []
    for (let j = (n-i)/2; j>=0; j-=1){
        l=l+' '
    }
    for (let w = i; w>0; w-=1){
        l=l+'*'
    }
    for (let k = (n-i)/2; k>=0; k-=1){
        l=l+' '
    }
    console.log(l)
}