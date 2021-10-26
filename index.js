const inquirer = require("inquirer");
const fs = require('fs');
const htmlCreate = require("./dist/export");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

const employeeQuestions = [
    {
        type: "input",
        message: "Team managers name?",
        name: "name",
    },
    {
        type: "list",
        message:"What is your memebers role?",
        choices:[
            "Engineer",
            "Intern",
            "Manager"
        ],
        name:"role"
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "EmployeeNumber",
    },
    {
        type: "input",
        Message: "Manager email?",
        name: "email",
    },
];

function memberAdd(){
    inquirer.prompt(employeeQuestions)
    .then(function({name, role, id, email}) {
        let info = "";
        if (role === "Engineer") {
            info = "GitHub username";
        } else if (role === "Intern") {
            info = "school";
        } else {
            info = "office number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${info}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({info, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, info);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, info);
            } else {
                newMember = new Manager(name, id, email, info);
            }
            employees.push(newMember);
            htmlCreate.createCard(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    htmlCreate.bottomHtml();
                }
            });
        })
    })
};

function init(){
htmlCreate.topHtml
memberAdd()
};

init()