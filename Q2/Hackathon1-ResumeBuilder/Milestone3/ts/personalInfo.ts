const personalInfoSaved = document.getElementById(
  "personalInfoSaved"
) as HTMLButtonElement;

personalInfoSaved?.addEventListener("click", (e) => {
  e.preventDefault();

  const inpName = (document.getElementById("name") as HTMLInputElement).value;
  let inpAvatar = document.getElementById("avatar") as HTMLInputElement;
  const inpEmail = (document.getElementById("email") as HTMLInputElement).value;
  const inpPhNo = (document.getElementById("phNo") as HTMLInputElement).value;
  console.log(inpName, inpAvatar, inpEmail, inpPhNo);

  const name = document.getElementById("inpName") as HTMLElement;
  name.innerText = inpName;

  const email = document.getElementById("inpEmail") as HTMLElement;
  email.innerText = inpEmail;

  const phNo = document.getElementById("inpPhNo") as HTMLElement;
  phNo.innerText = inpPhNo;

  const avatar = document.getElementById("picture") as HTMLImageElement;
  avatar.innerHTML = "";

  const file = inpAvatar.files?.[0];
  if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imgElement = document.createElement("img");
      imgElement.src = e.target?.result as string;
      imgElement.id = "img";
      imgElement.alt = "Avatar Image"; // Optional

      avatar.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
  } else {
    console.error("Please upload a valid image file (.png or .jpg).");
  }
});
