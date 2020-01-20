var inquirer = require("inquirer");

const collectInputs = async (inputs = []) => {
    const prompts = [
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


    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
    const inputs = await collectInputs();
    console.log(inputs);
};

main();