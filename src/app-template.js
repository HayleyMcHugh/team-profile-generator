const appCards = teamData => {
    
    const manager = teamData.manager.map(function(job) {
        let managerHTML = `
        <div class="card" style="width: 18rem;">
             <h2>${job.name}</h2>
             <h4>Manager<h4>
             <p>ID: ${job.id}</p>
             <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
             <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHTML
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerHTML = `
        <div class="card" style="width: 18rem;">
             <h2>${job.name}</h2>
             <h4>Engineer<h4>
             <p>ID: ${job.id}</p>
             <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
             <p>Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHTML
    });

    const intern = teamData.intern.map(function(job) {
        let internHTML = `
        <div class="card" style="width: 18rem;">
             <h2>${job.name}</h2>
             <h4>Intern<h4>
             <p>ID: ${job.id}</p>
             <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
             <p>School: ${job.school}</p>
        </div>
        `
        return internHTML
    });

    return [manager,engineer,intern]
}

 module.exports = appTemplateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>My Team</title>
        </head>
        <body>
            <nav>
            <h1 class="text-center">My Team</h1>
            </nav>
            <div class="teamcards">
            ${appCards(appTemplateData)}
            </div>
        </body>
        </html>    
        `
}

