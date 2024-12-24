// Conditionals-TS-Level-2_2 (if/else)

const slider = document.querySelector("#aqiSlider") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLDivElement;
const description = document.querySelector("#description") as HTMLDivElement;

// Event Listener, der auf input reagiert, also bei jeder Slider-Bewegung arrow function ausführen
slider.addEventListener("input", (): void => {
    const aqi = Number(slider.value);
    
    if (aqi <= 50) {
        document.body.style.backgroundColor = "green";
        result.textContent = `AQI: ${aqi}`;
        description.innerHTML = `Level of health concern: Good. Level of health effect: Little or no risk`;
    } else if (aqi > 50 && aqi <= 100) {
        document.body.style.backgroundColor = "yellow";
        result.textContent = `AQI: ${aqi}`;
        description.innerHTML = `Level of health concern: Moderate. Level of health effect: Acceptable quality`;
    } else if (aqi > 100 && aqi <= 150) {
        document.body.style.backgroundColor = "red";
        result.textContent = `AQI: ${aqi}`;
        description.innerHTML = `Level of health concern: Unhealthy for sensitive groups. Level of health effect: General public not likely affected`;
    }
});


// oder anderer Lösungsweg mit Objekten:

// const slider = document.querySelector("#aqiSlider") as HTMLInputElement;
// const result = document.querySelector("#result") as HTMLDivElement;
// const description = document.querySelector("#description") as HTMLDivElement;

// const aqiInfo = {
//     good: {
//         color: "green",
//         concern: "Good",
//         effect: "Little or no risk"
//     },
//     moderate: {
//         color: "yellow",
//         concern: "Moderate",
//         effect: "Acceptable quality"
//     },
//     unhealthy: {
//         color: "red",
//         concern: "Unhealthy for sensitive groups",
//         effect: "General public not likely affected"
//     }
// };

// slider.addEventListener("input", (): void => {
//     const aqi = Number(slider.value);

//     if (aqi <= 50) {
//         updateDisplay(aqiInfo.good, aqi);
//     } else if (aqi > 50 && aqi <= 100) {
//         updateDisplay(aqiInfo.moderate, aqi);
//     } else if (aqi > 100 && aqi <= 150) {
//         updateDisplay(aqiInfo.unhealthy, aqi);
//     }
// });

// const updateDisplay = (info: { color: string, concern: string, effect: string }, aqi: number): void => {
//     document.body.style.backgroundColor = info.color;
//     result.textContent = `AQI: ${aqi}`;
//     description.innerHTML = `Level of health concern: ${info.concern}<br>Level of health effect: ${info.effect}`;
// };