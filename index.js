const inquirer = require("inquirer");
const fs = require('fs');
const htmlCreate = require("./dist/export");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let info = "";

const employees = [];

const managerQ = [
    {
        type: "input",
        message: "Team managers name?",
        name: "name",
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
    {
        type: "input",
        message: "Office Number?",
        name: "officeNumber"
    }

]

const employeeQuestions = [
    {
        type: "input",
        message: "Team members name?",
        name: "name",
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
function addManager() {
    inquirer.prompt(managerQ)
    .then(function ({ name, id, email, officeNumber }) {
        let newMember;
        newMember = new Manager(name, id, email, officeNumber);
        employees.push(newMember);
        htmlCreate.createCard(newMember);
        inquirer.prompt([{
            type: "list",
            message: "What is your next memebrs role?",
            choices: [
                "Engineer",
                "Intern",
                "Dont add anyone else"
            ],
            name: "role"
        }])
        .then(function ({ name, role, id, email }) {

            if (role === "Engineer") {
                info = "GitHub username";
                memberAdd(info, role, name)
            } else if (role === "Intern") {
                info = "school name";
                memberAdd(info, role, name)
            } else {
                htmlCreate.bottomHtml()
            }
})
    });

function memberAdd(info, role, name) {
    let newMember;
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "Team members name?",
                            name: "name",
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
                        {
                            type: "input",
                            message: `Members ${info}`,
                            name: "info"
                        }])
                        .then(function ({ name, id, email, info, role }) {
                            if (role === "Engineer") {
                                newMember = new Engineer(name, id, email, info);
                                console.log("new engineer created");
                            } else if (role === "Intern") {
                                newMember = new Intern(name, id, email, info);
                                console.log("new Intern created");
                            } else {
                                
                            }
                            employees.push(newMember);
                            htmlCreate.createCard(newMember)
                            .then(function() {
                                if (role === "Engineer" || "Intern" ) {
                                    memberAdd();
                                } else {
                                    htmlCreate.bottomHtml();
                                }
                            }) .catch(function(err){
                                console.log(err)
                            }) 
                        }
                        );
                    }
        }

function init() {
    htmlCreate.topHtml()
    addManager()
};

init()