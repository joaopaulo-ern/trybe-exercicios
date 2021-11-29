let salario = 7000

if (salario > 5189.82) {
    salarioBase = salario-570.88
}
else if (salario >= 2594.93){
    salarioBase = salario-0.11*salario
}
else if (porcentagem >= 1556.95) {
    salarioBase = salario-0.09*salario
}
else { 
    salarioBase = salario-0.08*salario
}
/*-----------------------------------*/
if (salarioBase > 4664.68) {
    ir = 0.275*salarioBase-869.36
}
else if (salarioBase >= 3751.06) {
    ir = 0.225*salarioBase-636.13
}
else if (salarioBase >= 2826.66) {
    ir = 0.15*salarioBase-354.8
}
else if (salarioBase >= 1903.99) {
    ir = 0.075*salarioBase-142.8
}
else {
    ir = salarioBase
}

console.log(salarioBase-ir)