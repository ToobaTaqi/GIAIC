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
    `;
        eduUl.appendChild(newLi);
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
        }
    }
    else {
        console.log("Element with id='eduUl' not found");
    }
});
export {};