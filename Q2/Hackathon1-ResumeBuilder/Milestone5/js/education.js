const addNewEducation = document.getElementById("addNewEducation");
addNewEducation.addEventListener("click", (e) => {
    e.preventDefault();
    const eduUl = document.getElementById("eduFieldSets");
    if (eduUl) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `
      <div class="field">
        <label for="qualification">Qualification</label>
        <input
          type="text"
          name="qualification"
          class="qualification"
          placeholder="BSCS / BCom..."
        />
      </div>
      <div class="field">
        <label for="institute">Institute</label>
        <input
          type="text"
          name="institute"
          class="institute"
          placeholder="Institute Name..."
        />
      </div>
      <div class="field">
        <label for="eduYear">Year</label>
        <input
          type="text"
          name="eduYear"
          class="eduYear"
          placeholder="2024..."
        />
      </div>

       <button class="deleteEdu">Delete</button>
    `;
        eduUl.appendChild(newLi);
        const deleteEdu = newLi.querySelector(".deleteEdu");
        deleteEdu.addEventListener("click", () => {
            eduUl.removeChild(newLi);
        });
    }
    else {
        console.log("Element with id='eduFieldSets' not found");
    }
});
const educationSaved = document.getElementById("educationSaved");
educationSaved.addEventListener("click", (e) => {
    e.preventDefault();
    const qualifications = document.querySelectorAll(".qualification");
    const institutes = document.querySelectorAll(".institute");
    const years = document.querySelectorAll(".eduYear");
    const eduUl = document.getElementById("eduUl");
    let allFieldsFilled = true;
    for (let i = 0; i < qualifications.length; i++) {
        if (!qualifications[i].value.trim() ||
            !institutes[i].value.trim() ||
            !years[i].value.trim()) {
            allFieldsFilled = false;
            break;
        }
    }
    if (!allFieldsFilled) {
        alert("Please fill out all fields before saving.");
        return; // Stop execution 
    }
    if (eduUl) {
        eduUl.innerHTML = "";
        for (let i = 0; i < qualifications.length; i++) {
            const qualification = qualifications[i].value;
            const institute = institutes[i]?.value || "";
            const year = years[i]?.value || "";
            const newLi = document.createElement("li");
            newLi.innerHTML = `
        <p>Qualification : <span class="inpQualification">${qualification}</span></p>
        <p>Institute : <span class="inpInstitute">${institute}</span></p>
        <p>Year : <span class="inpEducationYear">${year}</span></p>
      `;
            eduUl.appendChild(newLi);
            // Disable input fields after saving
            qualifications[i].setAttribute("disabled", "true");
            institutes[i].setAttribute("disabled", "true");
            years[i].setAttribute("disabled", "true");
            // alert("Education Saved successfully!");
        }
    }
    else {
        console.log("Element with id='eduUl' not found");
    }
});
export {};
