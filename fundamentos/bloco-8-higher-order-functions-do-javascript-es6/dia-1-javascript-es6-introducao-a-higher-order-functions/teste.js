const wakeUp = () => 'Acordando!!';
const  coffee = () => 'Bora tomar café!!';
const goSleep = () => 'Partiu dormir!!' ;

const doingThings = (func) => func();

console.log(doingThings(wakeUp))