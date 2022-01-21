const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  }; 
  
const battleMembers = { mage, warrior, dragon };

const dadoDrag = () => Math.round((Math.random() * (battleMembers.dragon.strength - 15)) + 15) ;

const dadoWarrior = () => Math.round((Math.random() * ((battleMembers.warrior.strength*battleMembers.warrior.weaponDmg) - battleMembers.warrior.strength)) + battleMembers.warrior.strength)

const dadoManaMage = () => {
    const mago = {
        dano: Math.round((Math.random() * ((battleMembers.mage.intelligence*2) - battleMembers.mage.intelligence)) + battleMembers.mage.intelligence),
        manaGasta: 15,
    }
    if (battleMembers.mage.mana < 15) {
        const mago = {
            dano: 'Não possui mana suficiente',
            manaGasta: 0,
        }
    }
    return mago
}

const gameActions = {
    turnoGuerreiro: (ataqueGuerreiro) => {
        battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - ataqueGuerreiro;
        battleMembers.warrior.damage = ataqueGuerreiro
    },
    turnoMago: (ataqueMago) => {
        battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - ataqueMago.dano;
        battleMembers.mage.mana = battleMembers.mage.mana - ataqueMago.manaGasta;
        battleMembers.mage.damage = ataqueMago.dano
    },
    turnoDragao: (ataqueDragao) => {
        battleMembers.warrior.healthPoints = battleMembers.warrior.healthPoints - ataqueDragao;
        battleMembers.mage.healthPoints = battleMembers.mage.healthPoints - ataqueDragao;
        battleMembers.dragon.damage = ataqueDragao
    },
};
gameActions.turnoGuerreiro(dadoWarrior())
gameActions.turnoMago(dadoManaMage())
gameActions.turnoDragao(dadoDrag())
console.log(battleMembers);



