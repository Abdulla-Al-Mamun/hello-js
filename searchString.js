const name = 'abdulla al mamun';
const searchString = 'Al';
const doesExist = name.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist, name);

if (name.indexOf('alll') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('exists not inside the string');

}