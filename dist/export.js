function generateemployee(response) {
    return `
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
        <link rel="Stylesheet" href="./dist/css/style.css" />
    </head>
    
    <body>
        <div class="card-deck">
            <div class="card border-success mb-3 .d-flex " style="max-width: 18rem;">
                <div class="card-header text-white bg-primary border-success">${response.name} <br>
                    ${response.qualification}</div>
                <div class="card-body text-success">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${response.id}</li>
                        <li class="list-group-item">Email: ${repponse.email}</li>
                        <li class="list-group-item">Office number: ${response.office} ${response.github} ${response.school}</li>
                    </ul>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
    </body>
    
    </html>
  `;
  }
  
  module.exports = generateemployee;