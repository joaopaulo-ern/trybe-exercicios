// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void
// }

// class MeleeCharacter extends Character{
//   constructor(private _name: string, private _specialMove: string){
//     super();
//   }
//   talk(): void {
//     console.log(`olá meu nome é ${this._name} e meus ataques são corpo a corpo`);
//   }
//   specialMove(): void {
//     console.log(`PODEROSO ${this._specialMove}, RECEBAAAA
//     `);
//   }
// }

// class LongRangeCharacter extends Character{
//   constructor(private _name: string, private _specialMove: string){
//     super();
//   }
//   talk(): void {
//     console.log(`olá meu nome é ${this._name} e meus ataques são a distância`);
//   }
//   specialMove(): void {
//     console.log(`PODEROSO ${this._specialMove}, TOME BALA
//     `);
//   }
// }

// const personagem = (character: Character) => {
//   character.talk();
//   character.specialMove();
// }

// const LeeSin = new MeleeCharacter('Lee Sin', 'Dragon Rage');
// const Caitlyn = new LongRangeCharacter('Caitlyn', 'Ás na manga');

// personagem(LeeSin);
// personagem(Caitlyn);