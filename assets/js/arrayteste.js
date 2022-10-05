let ages = [12, 24, 52, 89, 13, 27, 4, 19, 18];

const mapAge = (index) => {
    if([index] >= 18 && [index] < 60){
        return index = "Adulto";
    } 
    else if ([index] >= 60) {
        return index = "Idoso";
    } 
    else {
        return index = "Criança";
    };
};

const filterAge = (index) => {
    if([index] >= 18 && [index] < 60){
        return `${index}, adulto`;
    };
};

const findAge = (index) => {
    if([index] >= 60){
        return index + " Idoso";
    }
};

const ageMap = ages.map(mapAge);
const ageFilter = ages.filter(filterAge);
const ageFind = ages.find(findAge);

console.log("Array de aduldos [" + ageFilter + "]");
console.log(ageMap);
console.log(`O primeiro idoso tem a idade de ${ageFind} anos.`)