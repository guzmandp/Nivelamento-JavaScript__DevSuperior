const product = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const productCopy = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

productCopy.prototype.total = function () {
    return this.price * this.quantity
}

productCopy.prototype.add = function (amount) {
    this.quantity += amount;
}

productCopy.prototype.remove = function (amount) {
    if (this.quantity >= amount) {
        this.quantity -= amount;    
    }
}

productCopy.prototype.label = function () {
    return " Dados: " + this.name + " , " + this.price.toFixed(2);
}

const product2 = new productCopy("Monitor", 800.0, 10);

const product3 = new productCopy("Mouse", 50.0, 4);