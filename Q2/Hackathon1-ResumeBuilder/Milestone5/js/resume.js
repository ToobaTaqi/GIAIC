// edit functionality
const editResume = document.getElementById("editResume");
editResume?.addEventListener("click", () => {
    console.log("Edit Enabled");
    //   alert("Edit Enabled");
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.removeAttribute("disabled"); //remove disable functionality
    });
});
// generate url
const generateURL = document.getElementById("generateURL");
generateURL.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username")
        .value;
    const data = {
        name: document.getElementById("name").value,
        avatar: document.getElementById("avatar").value,
        email: document.getElementById("email").value,
        phNo: document.getElementById("phNo").value,
        qualifications: document.querySelectorAll(".qualification"),
        institutes: document.querySelectorAll(".institute"),
        eduYears: document.querySelectorAll(".eduYear"),
        skills: document.querySelectorAll(".skill"),
        companies: document.querySelectorAll(".company"),
        positions: document.querySelectorAll(".position"),
        expYears: document.querySelectorAll(".expYear"),
    };
    localStorage.setItem(username, JSON.stringify(data));
    const shareableLink = document.getElementById("shareableLink");
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLink.textContent = shareableURL;
    // shareableLink.href = shareableURL;
});
// download
const downloadPDF = document.getElementById("downloadPDF");
downloadPDF.addEventListener("click", () => {
    window.print();
});
export {};
