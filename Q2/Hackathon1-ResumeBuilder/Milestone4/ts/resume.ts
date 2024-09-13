const editResume = document.getElementById("editResume") as HTMLButtonElement;

editResume?.addEventListener("click", () => {
  console.log("Edit Enabled");
  //   alert("Edit Enabled");
  const inputs = document.querySelectorAll(
    "input"
  ) as NodeListOf<HTMLInputElement>;

  inputs.forEach((input) => {
    input.removeAttribute("disabled"); //remove disable functionality
  });
});
