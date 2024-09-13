const addNewExperience = document.getElementById("addNewExperience");
addNewExperience.addEventListener("click", (e) => {
    e.preventDefault();
    const expUl = document.getElementById("expFieldSets");
    if (expUl) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `  <div class="field">
                <label for="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  class="company"
                  placeholder="BSCS / BCom..."
                />
              </div>

              <div class="field">
                <label for="position">Position</label>
                <input
                  type="text"
                  name="position"
                  class="position"
                  placeholder="Jr. Frontend Developer..."
                />
              </div>

              <div class="field">
                <label for="expYear">Year</label>
                <input
                  type="text"
                  name="expYear"
                  class="expYear"
                  placeholder="2022 - 2023..."
                />
              </div> 
              <button class="deleteExp">Delete</button>
              `;
        expUl.appendChild(newLi);
        // Add event listener to the delete button
        const deleteExp = newLi.querySelector(".deleteExp");
        deleteExp.addEventListener("click", () => {
            expUl.removeChild(newLi);
        });
    }
    else {
        console.log("Element with id='eduFieldSets' not found");
    }
});
const experienceSaved = document.getElementById("experienceSaved");
experienceSaved.addEventListener("click", (e) => {
    e.preventDefault();
    const companies = document.querySelectorAll(".company");
    const positions = document.querySelectorAll(".position");
    const expYears = document.querySelectorAll(".expYear");
    const expUl = document.getElementById("expUl");
    let allFieldsFilled = true;
    for (let i = 0; i < companies.length; i++) {
        if (!companies[i].value.trim() ||
            !positions[i].value.trim() ||
            !expYears[i].value.trim()) {
            allFieldsFilled = false;
            break;
        }
    }
    if (!allFieldsFilled) {
        alert("Please fill out all fields before saving.");
        return;
    }
    if (expUl) {
        expUl.innerHTML = ``;
        for (let i = 0; i < companies.length; i++) {
            const company = companies[i].value;
            const position = positions[i]?.value || "";
            const year = expYears[i]?.value || "";
            const newLi = document.createElement("li");
            newLi.innerHTML = `
         <p>Company Name :  <span class="inpCompanyName">${company}</span></p>
         <p>Position : <span class="inpPosition">${position}</span> </p>
         <p>Year : <span class="inpExpYear">${year}</span></p>
      `;
            expUl.appendChild(newLi);
            // Disable input fields after saving
            companies[i].setAttribute("disabled", "true");
            positions[i].setAttribute("disabled", "true");
            expYears[i].setAttribute("disabled", "true");
            // alert("Experiences Saved successfully!");
        }
    }
    else {
        console.log("Element with id='expUl' not found");
    }
});
export {};
