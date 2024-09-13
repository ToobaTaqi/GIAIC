const editResume = document.getElementById("editResume");
editResume?.addEventListener("click", () => {
    console.log("Edit Enabled");
    //   alert("Edit Enabled");
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.removeAttribute("disabled"); //remove disable functionality
    });
});
export {};
