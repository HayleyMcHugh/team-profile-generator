const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./dist/index.html')

const questions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'manager-name',
    },
    {
        type: 'input',
        message: 'What is the team managers employee id?',
        name: 'manager-id',
    },
    {
        type: 'input',
        message: 'What is the team managers email address?',
        name: 'manager-email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?.',
        name: 'manager-office',
    },
    {
        type: 'list',
        message: 'Choose whether youd like to add an engineer or an intern to your team.',
        choices: ['Engineer', 'Intern'],
        name: 'employee-choices',
    },
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineer-name',
    },
    {
        type: 'input',
        message: 'What is the engineers employee id?',
        name: 'engineer-id',
    },
    {
        type: 'input',
        message: 'What is the engineers email address?',
        name: 'engineer-email',
    },
    {
        type: 'input',
        message: 'What is the engineers office number?.',
        name: 'engineer-office',
    },
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'intern-name',
    },
    {
        type: 'input',
        message: 'What is the interns employee id?',
        name: 'intern-id',
    },
    {
        type: 'input',
        message: 'What is the interns email address?',
        name: 'intern-email',
    },
    {
        type: 'input',
        message: 'What is the interns office number?.',
        name: 'intern-office',
    },
]


fs.writeFile(fileName, data, error => {
    if (error) {
        return console.log(error);
    }
        console.log("Success! Your team profile generator has been created!")
});

function init () {
    const userResponses = inquirer.prompt(questions);
    const html = generateHTML(userResponses);
    fs.writeFile('exampleindex.html', html);
}

init();