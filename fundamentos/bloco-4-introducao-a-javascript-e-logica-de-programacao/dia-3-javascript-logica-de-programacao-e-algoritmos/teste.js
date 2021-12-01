n=7
for (let i = 1; i<=n; i+=2){
    let l = []
    if (i!=n || i!=1){
        for (let j = (n-i)/2; j>=0; j-=1){
            l=l+' '
        }
        l=l+'*'
        for (let k = (i)-2; k>=1; k-=1){
            l=l+' '
        }
        l=l+'*'
        for (let w = (n-i)/2; w>=0; w-=1){
            l=l+' '
        }
        console.log(l)
    }
}