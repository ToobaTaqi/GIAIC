// edit functionality
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

// generate url
const generateURL = document.getElementById("generateURL") as HTMLButtonElement;
generateURL.addEventListener("click", (e) => {
  e.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const data = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    avatar: (document.getElementById("avatar") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    phNo: (document.getElementById("phNo") as HTMLInputElement).value,
    qualifications: document.querySelectorAll(
      ".qualification"
    ) as NodeListOf<HTMLInputElement>,
    institutes: document.querySelectorAll(
      ".institute"
    ) as NodeListOf<HTMLInputElement>,
    eduYears: document.querySelectorAll(
      ".eduYear"
    ) as NodeListOf<HTMLInputElement>,
    skills: document.querySelectorAll(".skill") as NodeListOf<HTMLInputElement>,
    companies: document.querySelectorAll(
      ".company"
    ) as NodeListOf<HTMLInputElement>,
    positions: document.querySelectorAll(
      ".position"
    ) as NodeListOf<HTMLInputElement>,
    expYears: document.querySelectorAll(
      ".expYear"
    ) as NodeListOf<HTMLInputElement>,
  };

  localStorage.setItem(username, JSON.stringify(data));

  const shareableLink = document.getElementById(
    "shareableLink"
  ) as HTMLAnchorElement;
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;
  shareableLink.textContent = shareableURL;
  // shareableLink.href = shareableURL;
});

// download
const downloadPDF = document.getElementById("downloadPDF") as HTMLButtonElement;
downloadPDF.addEventListener("click", () => {
  window.print();
});
