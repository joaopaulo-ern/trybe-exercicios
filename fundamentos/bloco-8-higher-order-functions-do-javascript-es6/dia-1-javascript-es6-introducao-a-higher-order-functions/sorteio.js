const sorteio = () => Math.floor(Math.random() * 6);

const verificacao = (aposta) => {
    return (aposta === sorteio()) ? 'Parabéns você ganhou' : 'Tente novamente'
}

console.log(verificacao(3));
