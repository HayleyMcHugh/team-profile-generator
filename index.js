const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateApp = require('./src/app-template');
const writeToFile = require('./src/generate-app');

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = {manager, engineer, intern};

function Prompt() {

    return inquirer
        .prompt([
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role',
        },  
        {
            type: 'text',
            message: "What is the employee's name?",
            name: 'name',
        },
        {
            type: 'text',
            message: "What is the employee's ID?",
            name: 'id',
        },
        {
            type: 'text',
            message: "What is the employee's email?",
            name: 'email',
        }])
        .then(({role, name, id, email}) => {
            if (role === 'Manager') {
                return inquirer
                    .prompt([{
                        type: 'text',
                        message: "What is the manager's office number?",
                        name: 'office'
                    },
                    {
                        type: 'confirm',
                        message: "Do you want to add another employee?",
                        name: 'anotherEmployee',
                        default: false
                    }])
                    .then(({office, anotherEmployee}) => {
                        manager.push(new Manager(name, id, email, office))
                        if (anotherEmployee) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Engineer') {
                return inquirer
                    .prompt([{
                        type: 'text',
                        message: "What is the engineer's Github username?",
                        name: 'github',
                    },
                    {
                        type: 'confirm',
                        message: "Do you want to add another employee?",
                        name: 'anotherEmployee',
                        default: false
                    }])
                    .then(({github, anotherEmployee}) => {
                        engineer.push(new Engineer(name, id, email, github))
                        if (anotherEmployee) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                return inquirer
                    .prompt([{
                        type: 'text',
                        message: "What is the intern's school?",
                        name: 'school'
                    },
                    {
                        type: 'confirm',
                        message: "Do you want to add another employee?",
                        name: 'anotherEmployee',
                        default: false
                    }])
                    .then(({school, anotherEmployee}) => {
                        intern.push(new Intern(name, id, email, school))
                        if (anotherEmployee) {
                            return Prompt();
                        }
                    })
            }
        })
};

Prompt()
    .then(teamData => {
        return generateApp(employeeArray)
    })
    .then(pageHTML => {
        return writeToFile(pageHTML)
    })