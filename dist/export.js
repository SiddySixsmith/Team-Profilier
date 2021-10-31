const fs = require("fs");
const Employee = require("../lib/Employee")

function topHtml() {
    const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title class="mx-auto">
            Team Portfolio
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css" />
    </head>
    
    <body>
    <section>
           `;
    fs.writeFile("./dist/Team-Profile.html", htmlCode, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};

function createCard(member){
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub(); 
         data = `
         <div class ="card-deck">
         <div class="card border-success mb-3  " style="max-width: 18rem;">
        <div class="card-header text-white bg-primary border-success">${name} <br>
        <i class="fas fa-glasses"></i> ${role}</div>
        <div class="card-body text-success">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
            <li class="list-group-item">Github Username: ${gitHub}</li>
        </ul>
        </div>
        </div>
        </div>`
        } else if (role === "Intern") {
            const school = member.getSchool(); 
         data =`
         <div class ="card-deck">
         <div class="card border-success mb-3  " style="max-width: 18rem;">
         <div class="card-header text-white bg-primary border-success">${name} <br>
         <i class="fas fa-book"></i> ${role}</div>
        <div class="card-body text-success">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
        </div>
        </div>`
        } else {
            const officeNumber = member.getOfficeNumber();
             data =`
             <div class ="card-deck">
             <div class="card border-success mb-3  " style="max-width: 18rem;">
             <div class="card-header text-white bg-primary border-success">${name} <br>
             <i class="fas fa-mug-hot"></i> ${role}</div>
            <div class="card-body text-success">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
            </ul>
            </div>
            </div>
            </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/Team-Profile.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
});
}

function bottomHtml(){
    const htmlCode = 
    `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>

</html>`
fs.appendFile("./dist/Team-Profile.html", htmlCode, function (err) {
    if (err) {
        return reject(err);
    };
});
}

  module.exports = {topHtml, bottomHtml, createCard};