function inchiToFeet(inchi) {
    const feet = inchi / 12;
    return feet;
}

const dadainchi = 104;
const dadafeet = inchiToFeet(dadainchi);

console.log(dadafeet);