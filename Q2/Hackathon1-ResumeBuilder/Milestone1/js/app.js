function handleSave() {
    alert("saved");
}
// Attaching event listeners after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", handleSave);
    });
});
export {};
