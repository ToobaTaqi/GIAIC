const addNewExperience = document.getElementById(
  "addNewExperience"
) as HTMLButtonElement;

addNewExperience.addEventListener("click", (e) => {
  e.preventDefault();

  const expUl = document.getElementById("expFieldSets") as HTMLUListElement;

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
              </div> `;

    expUl.appendChild(newLi);
  } else {
    console.log("Element with id='eduFieldSets' not found");
  }
});

const experienceSaved = document.getElementById(
  "experienceSaved"
) as HTMLButtonElement;

experienceSaved.addEventListener("click", (e) => {
  e.preventDefault();

  const companies = document.querySelectorAll(
    ".company"
  ) as NodeListOf<HTMLInputElement>;
  const positions = document.querySelectorAll(
    ".position"
  ) as NodeListOf<HTMLInputElement>;
  const expYears = document.querySelectorAll(
    ".expYear"
  ) as NodeListOf<HTMLInputElement>;

  const expUl = document.getElementById("expUl") as HTMLUListElement;

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
    }
  } else {
    console.log("Element with id='expUl' not found");
  }
});
