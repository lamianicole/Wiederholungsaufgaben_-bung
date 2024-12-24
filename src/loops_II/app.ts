function createLoop(num: number): string {
    let result = "L";
    for (let i = 0; i < num; i++) {
        result += "o";
    }
    result += "p";
    return result;
}

document.querySelector("#loopBtn")?.addEventListener("click", () => {
    const numInput = document.querySelector("#numberInput") as HTMLInputElement;
    const output = document.querySelector("#output");

    if (numInput && output) {
        const num = Number(numInput.value); //string in number
        if (!isNaN(num) && num > 0) {
            const loopString = createLoop(num);
            output.textContent = loopString;
        } else {
            output.textContent = "Bitte geben Sie eine gültige Zahl ein.";
        }
    }
});


// mittels string method concat()
// function createLoopString(num: number): string {
//     let result = "L".concat("o".repeat(num), "p");
//     return result;
// }

// document.querySelector("#generateBtn")?.addEventListener("click", () => {
//     const numInput = document.querySelector("#numInput") as HTMLInputElement;
//     const output = document.querySelector("#output");

//     if (numInput && output) {
//         const num = Number(numInput.value); 
//         if (!isNaN(num) && num > 0) {
//             const loopString = createLoopString(num);
//             output.textContent = loopString;
//         } else {
//             output.textContent = "Bitte geben Sie eine gültige Zahl ein.";
//         }
//     }
// });



// mittels array method fill + join
// function createLoopString(num: number): string {
//     const oArray = Array(num).fill("o");
//     return "L" + oArray.join('') + "p";
// }

// document.querySelector("#generateBtn")?.addEventListener("click", () => {
//     const numInput = document.querySelector("#numInput") as HTMLInputElement;
//     const output = document.querySelector("#output");

//     if (numInput && output) {
//         const num = Number(numInput.value); 
//         if (!isNaN(num) && num > 0) {
//             const loopString = createLoopString(num);
//             output.textContent = loopString;
//         } else {
//             output.textContent = "Bitte geben Sie eine gültige Zahl ein.";
//         }
//     }
// });