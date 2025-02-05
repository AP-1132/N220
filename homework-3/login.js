let password = "(d0nteatTheScript)";//chose let in case I wanted to check eligibility of other passwords

const passwordBeginsWithSpace = password.toLowerCase().includes(" ");//chose const because this should not change
console.log("Password begins with space", passwordBeginsWithSpace);

const passwordMoreThanEight = password.length > 8;//chose const because this should not change
console.log("Password greater than 8 characters",passwordMoreThanEight);

const passwordContainsEat = password.toLowerCase().includes("eat");//chose const because this should not change
console.log("Password contains word eat",passwordContainsEat)




