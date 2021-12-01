let fim = 100

  for(let i = fim; i>=2; i-=1){
    let a = []
    for(let j = 2; j<=fim; j+=1){
      let b = i%j
      if(b==0){
          a=a+1
      }
    }
  if(a==1){
    console.log(i)
    break
  }
}