interface Logger {
  log(myParam: string): void;
}
////////////////////////////////////////////////////////////
class ConsoleLogger1 implements Logger {
  log(myParam: string): void {
    console.log(`venho do Logger1 e tenho o parametro ${myParam}`);
  }
}
////////////////////////////////////////////////////////////

class ConsoleLogger2 implements Logger {
  log(myParam: string): void {
    console.log(`venho do Logger1 e tenho o parametro ${myParam}`);
  }
}
////////////////////////////////////////////////////////////

interface Database {
  Logger: Logger;

  save(key: string, value: string): void
}
////////////////////////////////////////////////////////////

class ExampleDatabase implements Database {
  constructor(
    public Logger: Logger = new ConsoleLogger1,
  ) {}

  save(key: string, value: string): void {
    this.Logger.log(`salvando o valor ${value} e a chave ${key}`)
  }
}
////////////////////////////////////////////////////////////

const logger1 = new ConsoleLogger1();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');