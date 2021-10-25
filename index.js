const inquirer = require("inquirer");
const fs = require('fs');
const generateemployee = require("./dist/export.js");

const managerQuestions = [
    {
        type: "input",
        message: "Team managers name?",
        name: "name",
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

const engineerQuestions = [
    {
        type: "input",
        message: "Engineers name?",
        name: "name",
    },
    {
        type: "input",
        message: "Employee number?",
        name: "EmployeeNumber",
    },
    {
        type: "input",
        Message: "Engineers email?",
        name: "email",
    },
    {
        type: "input",
        Message: "Engineers Github?",
        name: "Github",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "Interns name?",
        name: "name",
    },
    {
        type: "input",
        message: "Employee number?",
        name: "EmployeeNumber",
    },
    {
        type: "input",
        Message: "Engineers email?",
        name: "email",
    },
    {
        type: "input",
        Message: "Interns school?",
        name: "school",
    },
];
