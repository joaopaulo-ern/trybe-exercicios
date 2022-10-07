class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  // connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    let infoTv = `A TV ${this.brand} possui ${this.size} polegadas, com resolução de ${1080}p e conexões variadas, vale destaque para`
    this.connections.forEach((elemento) => infoTv = infoTv + elemento)
    console.log(infoTv);
  }
}

const tv1 = new Tv('toshiba', 24, 1080, [' HDMI', ' VGA']);
tv1.turnOn();