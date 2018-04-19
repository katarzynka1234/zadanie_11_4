
function Phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '. The camera has ' + this.camera + 'Mpix.');
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 20);
iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone('Samsung', 1580, 'blue', 12);
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone('Xiaomi', 1200, 'red', 15);
OnePlusOne.printInfo();

var HuaweiP10 = new Phone('Huawei', 1400, 'black', 18);
HuaweiP10.printInfo();

