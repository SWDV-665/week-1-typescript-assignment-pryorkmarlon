var Grocery = /** @class */ (function () {
    function Grocery(item, price, quantity) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
        this.fullItem = "Grocery item: " + item + " Price: " + price + " Quantity: " + quantity;
    }
    return Grocery;
}());
function GList(items) {
    return "Grocery Item: " + items.item + " ---- Price: $" + items.price + " ---- Quantity: " + items.quantity;
}
var i1 = new Grocery("Bacon", "3.99", "1 pack");
var i2 = new Grocery("Orange Juice", "5.00", "1");
var i3 = new Grocery("Chicken", "8.50", "2");
var i4 = new Grocery("Mixed Veggies", "8.00", "1");
document.body.textContent = GList(i1) + ", " + GList(i2) + ", " + GList(i3) + ", " + GList(i4);
