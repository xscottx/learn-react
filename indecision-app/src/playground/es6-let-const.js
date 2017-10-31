let nameVar = 'Andrew';
// var nameVar = 'Mike';   // you can override vars w/ same name
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Ale';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

getPetName();

/**
 * get pet name
 * @returns {int} 
 */
function getPetName() {
    const petName = 'Hal';
    return petName;
}
// Block scoping - const and let are block-level scope, good practice
let fullName = 'Hoang Vo';
if (fullName) {
    const firstName = fullName.split(' ');
    console.log(firstName);
};
