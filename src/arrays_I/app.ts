// Array-TS-Level-1_4 (push)

const sports: string[] = ["cycling", "floorball", "diving", "soccer"];
console.log(sports);
// zeigt 4 für 4 items im array an und array selbst

const newSports = sports.push("wakeboarding");
console.log(newSports);
// zeigt 5 an
console.log(sports);
// zeigt 5 und aktualisiertes array an

const moreNewSports = sports.push("tennis", "hockey");
console.log(moreNewSports);
// zeigt 7 an
console.log(sports);
// zeigt 7 an und aktualisiertes array