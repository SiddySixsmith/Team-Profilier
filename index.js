const inquirer = require("inquirer");
const fs = require('fs');
const htmlCreate = require("./dist/export");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./dist/questions.js");

const employees = [];


function addManager() {
    inquirer.prompt(questions.managerQ)
    .then(function ({ name, id, email, officeNumber }) {
        let newMember;
        newMember = new Manager(name, id, email, officeNumber);
        employees.push(newMember);
        htmlCreate.createCard(newMember);
        return askWhoElse();
    });
    
}

function askNonManager(role){
    let newMember;
    if (role.toLowerCase() === "engineer") {
    return inquirer.prompt(questions.engineerQ)
    .then(function ({name, id, email, github}) {
        newMember = new Engineer(name, id, email, github);
        console.log("new engineer created");
        employees.push(newMember);
        htmlCreate.createCard(newMember)
    })
    } 
    if (role.toLowerCase() === "intern"){
    return inquirer.prompt(questions.internQ)
    .then(function ({name, id, email, school}) {
        newMember = new Intern(name, id, email, school);
        console.log("new Intern created");
        employees.push(newMember);
        htmlCreate.createCard(newMember)
    })
    }
    if (role.toLowerCase() === 'no one'){
        htmlCreate.bottomHtml();
        return false;
    } 

}

function askWhoElse(){
    inquirer.prompt([{
        type: "list",
        message: "Who else wou ld you like to add",
        choices: [
            "Engineer",
            "Intern",
            "No one"
        ],
        name: "role"
    }])
    .then(response => {
        return askNonManager(response.role)
    })
    .then(response => {
        if (response !== false){
            return askWhoElse()
        }
    })
}

function init() {
    htmlCreate.topHtml()
    addManager()
};

init()