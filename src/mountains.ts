export interface Mountain {
    name: string,
    height: number,
};

const mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
];

export function findNameOfTallestMountain(array: Mountain[]) {
    if (array !== []) {
        let maximum = 0;
        let tallestMountain: string = '';
        for (let element of array) {
            if (maximum < element.height) {
                maximum = element.height;
                tallestMountain = element.name;
            };
        };
        return tallestMountain;
    } else {
        return '';
    }
};

const result = findNameOfTallestMountain(mountains);
console.log(result);