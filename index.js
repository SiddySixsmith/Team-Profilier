const inquirer = require("inquirer");
const fs = require('fs');
const exportFile = require("./utilities/export");

const managerQuestions = [
    {
        type: "input",
        message: "Team managers name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "Employee number?",
        name: "EmployeeNumber",
    },
    {
        type: "input",
        Message: "Manager email?",
        name: "email",
    },
    {
        type: "input",
        Message: "Office Number?",
        name: "officeNumber",
    },
];