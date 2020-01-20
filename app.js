const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require("inquirer")
const path = require("path")
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
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: "input",
            message: "What is the employee's school?",
            name: "school",
            when: (answers) => answers.role === 'Intern'
        },
        {
            type: "input",
            message: "What is the employee's github?",
            name: "github",
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another employee?',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
    const wholeTeam = await collectInputs();
    console.log(wholeTeam);
};

main();


const renderEngineer = team => {

    var templateEngineer = fs.readFileSync(path.resolve(templatesDir), "utf8")
    console.log(templateEngineer);
    data(templateEngineer, "name", team[0].name)
    const outputPath = path.resolve(__dirname, "test.html");
    fs.writeFileSync(outputPath, templateEngineer, "utf8")
    // writeFileAsync("test.html", JSON.stringify(team))

}

const data = (file, placeHolder, answer) => {
    console.log(placeHolder, answer);

    const pattern = new RegExp("{{ " + placeHolder + " }}", "gm");
    // console.log(pattern);
    var test = file.replace(pattern, answer)
    console.log(test);

}
