const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const inquirer = require("inquirer");
const path = require("path");
const templatesDir = path.resolve(__dirname, "./test.html");

console.log(templatesDir);
const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"]
    },
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the employee's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the employee's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the employee's office number?",
      name: "office",
      when: answers => answers.role === "Manager"
    },
    {
      type: "input",
      message: "What is the employee's school?",
      name: "school",
      when: answers => answers.role === "Intern"
    },
    {
      type: "input",
      message: "What is the employee's github?",
      name: "github",
      when: answers => answers.role === "Engineer"
    },
    {
      type: "confirm",
      name: "again",
      message: "Enter another employee?",
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
  const team = await collectInputs();
  console.log(team);

  for (let i = 0; i < team.length; i++) {
    const teamMember = await team[i];

    console.log("=====================");
    console.log(teamMember);

    if (teamMember.role === "Manager") {
      const html = `
        
            <div class="card">
                <div class="card-header">
                    ${teamMember.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember.role}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">Office number: ${teamMember.office}</li>
                    </ul>
                </div>
            </div>`;

      appendFileAsync("index.html", html);
    } else if (teamMember.role === "Engineer") {
      const html = `
                    <div class="card">
                <div class="card-header">
                    ${teamMember.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember.role}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">GitHub: ${teamMember.github}</li>
                    </ul>
                </div>
            </div>`;

      appendFileAsync("index.html", html);
    } else if (teamMember.role === "Intern") {
      const html = `
            <div class="card">
                <div class="card-header">
                    ${teamMember.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember.role}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">School: ${teamMember.school}</li>
                    </ul>
                </div>
            </div>`;

      appendFileAsync("index.html", html);
    } else {
      const html = `</body> </html>`;
      appendFileAsync("index.html", html);
    }
  }
};
main();
