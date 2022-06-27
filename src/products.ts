export interface Product {
    name: string;
    price: number;
};

const products: Product[] = [
    {name: 'Skittles', price: 2},
    {name: 'Jerky', price: 8},
    {name: 'Waffles', price: 4}
];

export function calcAverageProductPrice(array: Product[]) {
    if (array !== []) {
        const average: number = array.reduce((a, b) => a + b.price, 0) / array.length;
        return average;
    } else {
        return 0;
    };
};

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);