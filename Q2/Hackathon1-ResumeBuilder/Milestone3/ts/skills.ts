const addNewSkill = document.getElementById("addNewSkill") as HTMLButtonElement;

addNewSkill.addEventListener("click", (e) => {
  e.preventDefault();

  const skillUl = document.getElementById("skillUl") as HTMLUListElement;

  if (skillUl) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `    <div class="field">
        <label for="skill">Skill</label>
        <input type="text" name="skill" class="skill" placeholder="React.js / TypeScript ..." />
      </div> `;

    skillUl.appendChild(newLi);
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

  if (skillsList) {
    skillsList.innerHTML = ``;

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i]?.value;

      const newLi = document.createElement("li");
      newLi.innerHTML = `
        <li class="skilLi">  ${skill} </li>
      `;

      skillsList.appendChild(newLi);
    }
  } else {
    console.log("Element not found");
  }
});
