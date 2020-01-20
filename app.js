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
    const managerPrompts = [
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOffice"
        },
        {
            type: "list",
            message: "Create new Employee",
            choices: ["Engineer", "Intern", "No more employees"],
            name: "newEmployee"
        }
    ]
    const { ...answers } = await inquirer.prompt(managerPrompts);

}

// function next() {
//     inquirer
//         .prompt(
//             {
//                 type: "list",
//                 message: "Create new Employee",
//                 choices: ["Engineer", "Intern", "No more employees"],
//                 name: "newEmployee"
//             })
//         .then(){
//                 if (newEmployee == "Intern"){

//                 }
//             }
// }


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOffice"
        },
        {
            type: "list",
            message: "Create new Employee",
            choices: ["Engineer", "Intern", "No more employees"],
            name: "newEmployee"
        }
    ])
    .then(function ({ managerName, managerID, managerEmail, managerOffice, newEmployee }) {

        var team = {
            role: "Manager",
            name: managerName,
            id: managerID,
            email: managerEmail,
            office: managerOffice
        }
        wholeTeam.push(team)

        console.log(wholeTeam);

        if (newEmployee == "Engineer") {

            // renderEngineer()

        }
        // const newHTML = generateHTML(team)
        // writeFileAsync("index.html", newHTML)

    });

// module.exports(team)





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
