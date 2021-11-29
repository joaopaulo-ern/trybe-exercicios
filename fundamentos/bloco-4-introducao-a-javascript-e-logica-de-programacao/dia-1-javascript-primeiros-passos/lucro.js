const valorVenda = 100
const valorCusto = 110

if (valorVenda<0 || valorCusto<0) {
    console.log('valor inválido')
}
else {
    let valorCustoTotal = 1.2*valorCusto
    let lucro = valorVenda - valorCustoTotal 

    console.log(lucro)
}
