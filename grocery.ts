class Grocery {
    fullItem: string;
    constructor(public item: string, public price: string, public quantity: string) {
        this.fullItem = "Grocery item: " + item + " Price: " + price + " Quantity: " + quantity
    }
}

interface GroceryItem {
    item: string,
    price: string,
    quantity: string,
}

function GList(items: GroceryItem) {
    return "Grocery Item: " + items.item + " ---- Price: $" + items.price + " ---- Quantity: " + items.quantity;
}

let i1 = new Grocery("Bacon", "3.99", "1 pack");
let i2 = new Grocery("Orange Juice", "5.00", "1");
let i3 = new Grocery("Chicken", "8.50", "2");
let i4 = new Grocery("Mixed Veggies", "8.00", "1");


document.body.textContent = GList(i1) + ", " + GList(i2) + ", " + GList(i3) + ", " + GList(i4) ;
