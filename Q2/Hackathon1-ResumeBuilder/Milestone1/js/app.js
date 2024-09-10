function handleSave() {
    alert("saved");
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", handleSave);
    });
});
export {};
