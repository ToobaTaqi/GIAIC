const personalInfoSaved = document.getElementById("personalInfoSaved");
personalInfoSaved?.addEventListener("click", (e) => {
    e.preventDefault();
    const inpName = document.getElementById("name").value;
    let inpAvatar = document.getElementById("avatar");
    const inpEmail = document.getElementById("email").value;
    const inpPhNo = document.getElementById("phNo").value;
    console.log(inpName, inpAvatar, inpEmail, inpPhNo);
    const name = document.getElementById("inpName");
    name.innerText = inpName;
    const email = document.getElementById("inpEmail");
    email.innerText = inpEmail;
    const phNo = document.getElementById("inpPhNo");
    phNo.innerText = inpPhNo;
    const avatar = document.getElementById("picture");
    avatar.innerHTML = "";
    const file = inpAvatar.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgElement = document.createElement("img");
            imgElement.src = e.target?.result;
            imgElement.id = "img";
            imgElement.alt = "Avatar Image"; // Optional
            avatar.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
    else {
        console.error("Please upload a valid image file (.png or .jpg).");
    }
});
export {};
