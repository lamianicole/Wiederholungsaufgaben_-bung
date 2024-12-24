// Funktion Passwortprüfung mittels ternary operator (?)
function checkPassword(password: string): string {
    return password.length >= 8 ? "Das Passwort ist sicher genug" : "Ihr Passwort muss mindestens 8 Zeichen lang sein";
}


document.querySelector("#save-btn")?.addEventListener("click", () => {
    const passwordInput = document.querySelector("#password-input") as HTMLInputElement;
    const message = document.querySelector("#message");

    if (passwordInput && message) {
        const result = checkPassword(passwordInput.value);
        message.textContent = result;
    }
});