// Anwendung for-Schleife und Conditional Statements: wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen wie in der Ergebnisvorschau. - Deklariere dafür die Function createImageNames. - Deklariere im Funktionskörper die Variable returnArray als leeres Array. - Schreibe eine for-Schleife. - Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermitteln, wie viel Nullen vor der Zahl stehen müssen. 
// Nutze push(), um den jeweiligen Dateinamen ins Array zu schreiben - Gib das Array mit return aus der Funktion zurück - Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames(): string[] {
    // Deklariere Variable returnArray als leeres Array
    const returnArray: string[] = [];

    // for-Schleife 1 bis 100
    for (let i = 1; i <= 100; i++) {
        // padStart stellt sicher, dass die Zahl immer drei Stellen hat
        const fileName = `image_${i.toString().padStart(3, '0')}.jpg`;
        // Füge den Dateinamen zum Array hinzu mit push
        returnArray.push(fileName);
    }
    // Gib das Array zurück
    return returnArray;
}
// Rufe die Funktion auf und gib das Ergebnis in der Konsole aus:
const imageNames = createImageNames();
console.log(imageNames);
// Konsole zeigt [ 'image_001.jpg', 'image_002.jpg', 'image_003.jpg', usw. bis 'image_100.jpg' ]



// Ansatz ohne padStart, stattdessen mit conditional statement (if-else):
// function createImageNames(): string[] {
//     const returnArray: string[] = [];

//     for (let i = 1; i <= 100; i++) {
//         let fileName: string;
        
//         if (i < 10) {
//             fileName = `image_00${i}.jpg`;
//         } else if (i < 100) {
//             fileName = `image_0${i}.jpg`;
//         } else {
//             fileName = `image_${i}.jpg`;
//         }

//         returnArray.push(fileName);
//     }
//     return returnArray;
// }

// const imageNames = createImageNames();
// console.log(imageNames);



// mittels string-Manipulation:
// function createImageNames(): string[] {
//     const returnArray: string[] = [];

//     for (let i = 1; i <= 100; i++) {
//         let fileName = 'image_';

//         if (i < 10) {
//             fileName += '00' + i;
//         } else if (i < 100) {
//             fileName += '0' + i;
//         } else {
//             fileName += i;
//         }

//Dateinamen vervollständigen
//         fileName += '.jpg';

//Dateinamen zum Array hinzufügen
//         returnArray.push(fileName);
//     }

//Array zurückgeben
//     return returnArray;
// }

// const imageNames = createImageNames();
// console.log(imageNames);