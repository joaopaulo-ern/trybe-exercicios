n=21
for (let i = 1; i<=n; i+=2){
    let l = []
    if(i==1){
        for (let j = (n-i)/2; j>=1; j-=1){
        l=l+' '
        }
        l=l+'*'
        for (let k = (n-i)/2; k>=1; k-=1){
            l=l+' '
        }
        console.log(l)
        l = []
    } else if (i!=n){        
        for (let j = (n-i)/2; j>=1; j-=1){
            l=l+' '
        }
        l=l+'*'
        for (let k = (i)-2; k>=1; k-=1){
            l=l+' '
        }
        l=l+'*'
        for (let w = (n-i)/2; w>=1; w-=1){
            l=l+' '
        }
        console.log(l)
        l = []
    } else {
        for (let i = 1; i<=n; i+=1){        
            l = l+'*'  
        }
        console.log(l)
    }
}