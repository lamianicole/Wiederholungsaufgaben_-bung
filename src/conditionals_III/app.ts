// Differenz zwischen einer bestimmten Zahl und 27 erhalten
// Wenn die Differenz größer als 27 ist, multipliziere die Differenz mit 2
function findDifference(num: number): number {
    const difference = num - 27;
    if (difference > 27) {
        return difference * 2;
    } else {
        return difference;
    }
}
// Teste die Nummern 35, 74, 123.
// findDifference(35);
// findDifference(74);
// findDifference(123);



// Variante mit Array
// Teste die Nummern 35, 74, 123. Array (testNumbers) aus Nummern erstellen und forEach-Methode durchläuft jedes Element des Arrays
const testNumbers = [35, 74, 123];
testNumbers.forEach(num => {
    const result = findDifference(num);
    console.log(`Die Differenz für ${num} ist: ${result}`);
});

// Die Differenz für 35 ist: 8 
// Die Differenz für 74 ist: 94 (47*2)
// Die Differenz für 123 ist: 192 (96*2)



// Variante mit arrow function und ternary operator:
// const findDifference = (num: number): number => {
//     const difference = num - 27;
//     return difference > 27 ? difference * 2 : difference;
// };

//Nummer 35, 74, 123
// console.log(`Die Differenz für 35 ist: ${findDifference(35)}`);
// console.log(`Die Differenz für 74 ist: ${findDifference(74)}`);
// console.log(`Die Differenz für 123 ist: ${findDifference(123)}`);



// Variante mit switch:
// function findDifference(num: number): number {
//     const difference = num - 27;
//     let result: number;

//     switch (true) {
//         case (difference > 27):
//             result = difference * 2;
//             break;
//         default:
//             result = difference;
//             break;
//     }
//     return result;
// }

//Nummer 35
// console.log(`Die Differenz für 35 ist: ${findDifference(35)}`);
//Nummer 74
// console.log(`Die Differenz für 74 ist: ${findDifference(74)}`);
//Nummer 123
// console.log(`Die Differenz für 123 ist: ${findDifference(123)}`);