// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {
// }

// const myFunc = (classe: any) => {
//   const xablau = new classe(true)
//   xablau.sayHello()
// }

// myFunc(Superclass)
// myFunc(Subclass)
//////////////////////////////////////////////////////////
// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   // protected sayHello(): void {
//   //   console.log('Olá mundo!');
//   // }

//   private sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {
//   sayHello2(): void {
//     this.sayHello();
//   }
// }

// const myFunc = (classe: any) => {
//   const xablau = new classe(true)
//   xablau.sayHello()
// }

// myFunc(Subclass)

//////////////////////////////////////////////////////////
class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello(): void {
    this.isSuper ? console.log('Super') : console.log('Sub')
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false
  }
}

const myFunc = (classe: any) => {
  const xablau = new classe()
  xablau.sayHello()
}

myFunc(Superclass)
myFunc(Subclass)