interface car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: car[] = [
    {
        brand: "BMW",
        model: "M3",
        price: 85000,
        year: 2023,
    },
    {
        brand: "Audi",
        model: "A4",
        price: 45000,
        year: 2022,
    },
    {
        brand: "Mercedes",
        model: "C63",
        price: 95000,
        year: 2024,
    },
    {
        brand: "VW",
        model: "Golf",
        price: 30000,
        year: 2021,
    },
];


// 1. Gesamtpreis mit forEach

function getTotalPrice(cars: car[]): number {

    let total = 0;

    cars.forEach(car => {
        total = total + car.price;
    });

    return total;
}


// 2. Autos ausgeben mit forEach

function printCars(cars: car[]): void {

    cars.forEach(car => {
        console.log(car.brand);
        console.log(car.model);
        console.log(car.price);
        console.log(car.year);
    });
}


// 3. Teure Autos mit forEach

function getExpensiveCars(cars: car[], minPrice: number): car[] {

    let expensiveCars: car[] = [];

    cars.forEach(car => {
        if (car.price > minPrice) {
            expensiveCars.push(car);
        }
    });

    return expensiveCars;
}


// 4. Gesamtpreis mit reduce

function getTotalPriceReduce(cars: car[]): number {

    return cars.reduce((total, car) => {
        return total + car.price;
    }, 0);
}


// 5. Teure Autos mit filter

function getExpensiveCarsFilter(cars: car[], minPrice: number): car[] {

    return cars.filter(car => car.price > minPrice);
}


// 6. Ausgaben zum Testen

console.log("Gesamtpreis mit forEach:");
console.log(getTotalPrice(cars));

console.log("Alle Autos:");
printCars(cars);

console.log("Teure Autos mit forEach:");
console.log(getExpensiveCars(cars, 50000));

console.log("Gesamtpreis mit reduce:");
console.log(getTotalPriceReduce(cars));

console.log("Teure Autos mit filter:");
console.log(getExpensiveCarsFilter(cars, 50000));