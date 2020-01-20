const app = require("./app.js")

function generateHTML(team) {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
            integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous'>
        <script src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
            integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
            crossorigin='anonymous'></script>
        <script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
            integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
            crossorigin='anonymous'></script>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
            integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6'
            crossorigin='anonymous'></script>
        <style>
            .jumbotron {
                text-align: center;
                font-weight: 700;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-size: 300%;
                background: #06d3d3;
                height: 150px;
                margin: 0;
                padding-top: 35px;
                box-shadow: 0 0 7px black;
    
            }
    
            .flex {
                display: flex;
                justify-content: center;
    
            }
    
            .card {
    
                flex-wrap: wrap;
                width: 250px;
                height: 300px;
                margin: 20px;
                box-shadow: 0 0 7px black;
            }
    
            .card-header {
                background: #06d3d3;
            }
    
            .list-group-item {
                padding-left: 0px;
            }
        </style>
    </head>
    
    <body>
        <div class="jumbotron">Employee Data</div>
        <div class="flex">
            <div class="card">
                <div class="card-header">
                    ${team[0].name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${team[0].role}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[0].id}</li>
                        <li class="list-group-item">Email: ${team[0].email}</li>
                        <li class="list-group-item">Office number: ${team[0].office}</li>
                    </ul>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`
}

module.exports = generateHTML()