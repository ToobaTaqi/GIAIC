const addNewSkill = document.getElementById("addNewSkill") as HTMLButtonElement;

addNewSkill.addEventListener("click", (e) => {
  e.preventDefault();

  const skillUl = document.getElementById("skillUl") as HTMLUListElement;

  if (skillUl) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `    <div class="field">
        <label for="skill">Skill</label>
        <input type="text" name="skill" class="skill" placeholder="React.js / TypeScript ..." />
      </div>
       <button class="deleteSkill">Delete</button>`;

    skillUl.appendChild(newLi);

    const deleteSkill = newLi.querySelector(
      ".deleteSkill"
    ) as HTMLButtonElement;
    deleteSkill.addEventListener("click", () => {
      skillUl.removeChild(newLi);
    });
  } else {
    console.log("Element not found");
  }
});

const skillSaved = document.getElementById("skillSaved") as HTMLButtonElement;

skillSaved.addEventListener("click", (e) => {
  e.preventDefault();

  const skills = document.querySelectorAll(
    ".skill"
  ) as NodeListOf<HTMLInputElement>;

  const skillsList = document.getElementById("skillsList") as HTMLUListElement;

  let allFieldsFilled = true;

  for (let i = 0; i < skills.length; i++) {
    if (!skills[i].value.trim()) {
      allFieldsFilled = false;
      break;
    }
  }

  if (!allFieldsFilled) {
    alert("Please fill out all fields before saving.");
    return;
  }

  if (skillsList) {
    skillsList.innerHTML = ``;

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i]?.value;

      const newLi = document.createElement("li");
      newLi.innerHTML = `
        <li class="skilLi">${skill}</li>
      `;

      skillsList.appendChild(newLi);

      // Disable input fields after saving
      skills[i].setAttribute("disabled", "true");

      // alert('Skills Saved successfully!');
    }
  } else {
    console.log("Element with id='skillsList' not found");
  }
});
