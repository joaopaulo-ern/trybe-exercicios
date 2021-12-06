let peça = 'PEÃO';
peça = peça.toLowerCase()

if (peça == 'peão') {
    console.log('Peão(Pawn) - Muita regra')
}
else if (peça == 'cavalo') {
    console.log('Cavalo(Knigth) - Move em L')
}
else if (peça == 'bispo') {
    console.log('Bispo(Bishop) - Move em diagonal')
}
else if (peça == 'torre') {
    console.log('Torre(Rook) - Move na horizontal')
}
else if (peça == 'rainha') {
    console.log('Rainha(Queen) - Move na horizontal e na diagonal')
}
else if (peça == 'rei') {
    console.log('Rei(King) - Move na horizontal e na diagonal, porém apenas uma casa')
}
else {
    console.log('Não é uma peça de xadrez')
}