var inquirer = require("inquirer");

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
    const inputs = await collectInputs();
    console.log(inputs);
};

main();