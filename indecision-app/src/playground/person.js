const isAdult = (age) => age > 17;
const canDrink = (age) => age > 20;
const isSenior = (age) => age > 64;

export { isAdult, canDrink, isSenior as default };