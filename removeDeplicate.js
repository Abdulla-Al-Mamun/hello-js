const names = ['abul', 'babul', 'cabul', 'kabul', 'gabul', 'abul', 'babul', 'kabul'];

function removeDeplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = removeDeplicate(names);
console.log(uniqueName);