'use strict';

var nameVar = 'Andrew';
// var nameVar = 'Mike';   // you can override vars w/ same name
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Ale';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

getPetName();

/**
 * get pet name
 * @returns {int} 
 */
function getPetName() {
    var petName = 'Hal';
    return petName;
}
// Block scoping - const and let are block-level scope, good practice
var fullName = 'Hoang Vo';
if (fullName) {
    var firstName = fullName.split(' ');
    console.log(firstName);
};
