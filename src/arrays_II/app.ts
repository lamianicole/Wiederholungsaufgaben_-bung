// Array-TS-Level-1_5 (pop)

const cities: string[] = ["Amsterdam", "London", "Manchester", "Kairo", "Asunción", "Monterrey"];
console.log(cities);
// 6 und zeigt array

let deletedCity: string | undefined = cities.pop();
console.log(cities);
// zeigt Anzahl 5 an und das aktialisierte array
console.log(deletedCity);
// zeigt Monterrey. Hier kann ich entfernten Wert noch weiterverwenden

// const newCities = cities.pop();
// console.log(newCities);
// zeigt: Monterrey, das letzte Zeichen
// console.log(cities);
// zeigt array ohne Monterrey an/entferntes item und Länge 5. Entfernter Wert geht verloren