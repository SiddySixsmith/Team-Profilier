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

];

const engineerQ= [
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
       message: "What is your Github username",
       name: "github" 
    }

];

const internQ = [
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
       message: "What is Interns current school",
       name: "school" 
    }

];


module.exports = {
    managerQ,
    engineerQ,
    internQ
}