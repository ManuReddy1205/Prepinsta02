function calculateCoffeeSupply(age, cupsPerDay){
    const maxAge = 100;
    const remainingYears = maxAge - age;
    const totalNoOfCupsOfCoffee = Math.round(remainingYears * cupsPerDay * 365);
    document.write(`yow will need ${totalNoOfCupsOfCoffee} cups of coffee to keep you awake until the  age of ${remainingYears}<br>`);
}
calculateCoffeeSupply(24, 2);
calculateCoffeeSupply(26, 2.5);
calculateCoffeeSupply(30, 1.25);
