var Tv = /** @class */ (function () {
    // connectedTo: string;
    function Tv(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        var infoTv = "A TV ".concat(this.brand, " possui ").concat(this.size, " polegadas, com resolu\u00E7\u00E3o de ").concat(1080, "p e conex\u00F5es variadas, vale destaque para");
        this.connections.forEach(function (elemento) { return infoTv = infoTv + elemento; });
        console.log(infoTv);
    };
    return Tv;
}());
var tv1 = new Tv('toshiba', 24, 1080, [' HDMI', ' VGA']);
tv1.turnOn();
