const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
        return students.map((elemento, i) => (
            {
                name: elemento,
                average: grades[i].reduce((acumulador, elementoReduce) => acumulador + elementoReduce)/grades[i].length
            }
        )
    )
}
console.log(studentAverage());


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const grades = [9, 8, 10,'.', 7, 5, 10, 9, 9,'.', 10, 8, 10,'-', 7, 10, 8, 9];
const teste = () => grades.reduce((acumulador, elemento) => `${acumulador}${elemento}`)
console.log(teste())