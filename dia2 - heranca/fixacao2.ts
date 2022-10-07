interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {}

  myFunc(myParam: number): string {
      return `myNumber + myParam = ${this.myNumber + myParam}`
  }
}

const xablau = new MyClass(5)

console.log(xablau.myFunc(2));
