const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA() {
    let array = names.reduce((acumulador, elemento) => acumulador + elemento).split('')
    return array.filter((elementoFilter) => (elementoFilter === 'A' || elementoFilter === 'a')).length
}
console.log(containsA());