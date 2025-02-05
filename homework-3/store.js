let shelfPrice = 40.99;//chose let in case I needed to calculate a different shelf price

const salesTax = 0.07;//chose const because sales tax should stay the same

let discountRate = 0.1;//chose let in case I needed to calculate a different discount rate

const totalAfterTax = shelfPrice * (1 + salesTax);//chose const because the equation for calculating sales tax does not change
console.log("Total after tax:",totalAfterTax);

console.log("Eligible for discount?", shelfPrice > 50 )

const discountAfterTax = shelfPrice * (1 + salesTax) * (1-discountRate)//chose const because the equation for calculating price after discount does not change
console.log("Price after discount:",discountAfterTax);