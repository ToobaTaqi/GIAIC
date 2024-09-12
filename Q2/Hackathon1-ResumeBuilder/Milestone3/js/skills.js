const addNewSkill = document.getElementById("addNewSkill");
addNewSkill.addEventListener("click", (e) => {
    e.preventDefault();
    const skillUl = document.getElementById("skillUl");
    if (skillUl) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `    <div class="field">
        <label for="skill">Skill</label>
        <input type="text" name="skill" class="skill" placeholder="React.js / TypeScript ..." />
      </div> `;
        skillUl.appendChild(newLi);
    }
    else {
        console.log("Element not found");
    }
});
const skillSaved = document.getElementById("skillSaved");
skillSaved.addEventListener("click", (e) => {
    e.preventDefault();
    const skills = document.querySelectorAll(".skill");
    const skillsList = document.getElementById("skillsList");
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
    }
    else {
        console.log("Element not found");
    }
});
export {};
