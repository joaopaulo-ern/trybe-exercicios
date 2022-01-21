const newEmployees = () => {
  const employees = {
    id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(Object.values(newEmployees())[1]); //retornou Luiza drummond 

const email = (p) => {
    const aux = {};
    for (let i of Object.values(p)){
        const letraMin = i.toLowerCase().replace(' ', '');
        aux[i] = `${letraMin}@trybe.com`
    }
    return aux;
}

console.log(email(newEmployees()));
