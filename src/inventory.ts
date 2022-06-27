import { Product } from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
};

const inventory: InventoryItem[] = [
    {product : {name: 'motor', price: 10.00}, quantity: 10},
    {product : {name: 'sensor', price: 12.50}, quantity: 4},
    {product : {name: 'LED', price: 1.00}, quantity: 20},
];

export function calcInventoryValue(array: InventoryItem[]): number {
    let total = 0;
    if (array !== []) {
        array.forEach(item => {
            total += (item.product.price * item.quantity);
        });
    };
    return total;
};

const totalProduct = calcInventoryValue(inventory);
console.log(totalProduct);