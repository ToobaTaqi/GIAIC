const personalInfoSaved = document.getElementById("personalInfoSaved");
personalInfoSaved?.addEventListener("click", (e) => {
    e.preventDefault();
    const inpName = document.getElementById("name").value;
    let inpAvatar = document.getElementById("avatar");
    const inpEmail = document.getElementById("email").value;
    const inpPhNo = document.getElementById("phNo").value;
    // console.log(inpName, inpAvatar, inpEmail, inpPhNo);
    if (!inpName || !inpEmail || !inpPhNo || !inpAvatar.files?.length) {
        alert("Please fill out all fields before saving.");
        return;
    }
    const name = document.getElementById("inpName");
    name.innerText = inpName;
    const email = document.getElementById("inpEmail");
    email.innerText = inpEmail;
    const phNo = document.getElementById("inpPhNo");
    phNo.innerText = inpPhNo;
    const avatar = document.getElementById("picture");
    avatar.innerHTML = "";
    const file = inpAvatar.files?.[0];
    if (file &&
        (file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg")) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imgElement = document.createElement("img");
            imgElement.src = e.target?.result;
            imgElement.id = "img";
            imgElement.alt = "Avatar Image";
            avatar.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
    else {
        console.error("Please upload a valid image file (.png or .jpg).");
    }
    const NAME = document.getElementById("name");
    NAME.value = "";
    NAME.setAttribute("disabled", "true");
    const EMAIL = document.getElementById("email");
    EMAIL.value = "";
    EMAIL.setAttribute("disabled", "true");
    const PHONE_NUMBER = document.getElementById("phNo");
    PHONE_NUMBER.value = "";
    PHONE_NUMBER.setAttribute("disabled", "true");
    document.getElementById("avatar").setAttribute("disabled", "true");
    //  alert('Personal Info Saved successfully!');
});
export {};
