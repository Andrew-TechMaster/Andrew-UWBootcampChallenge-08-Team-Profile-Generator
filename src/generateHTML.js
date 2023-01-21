class Generator {

    constructor(manager, members) {
        this.managerObj = manager;
        this.membersObj = members;
    }


    renderManagerCard() {

        const target = this.managerObj[0];

        return `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title">${target.name}</h3>
                        <h3 class="card-title">☕ Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${target.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${target.email}"> ${target.email} </a></li>
                            <li class="list-group-item">Office Number: ${target.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }

    renderEngineerCard() {
        const results = [];
        const target = this.membersObj.filter((person) => person.role === 'Engineer');

        target.forEach(el => {
            const res = `
            <div class="col">
             <div class="card">
                <div class="card-header bg-primary text-white">
                    <h3 class="card-title">${el.name}</h3>
                    <h3 class="card-title">👓 Engineer</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${el.id}</li>
                        <li class="list-group-item">Email: <a href="${el.email}">${el.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${el.github}"
                                target="_blank">${el.github}</a></li>
                    </ul>
                </div>
             </div>
            </div>`

            results.push(res);
        });
        
        return results;
    }

    renderInternCard() {
        const results = [];
        const target = this.membersObj.filter((person) => person.role === 'Intern');

        target.forEach(el => {
            const res = `
            <div class="col">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h3 class="card-title">${el.name}</h3>
                        <h3 class="card-title">🧑‍🎓 Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${el.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${el.email}">${el.email}</a></li>
                            <li class="list-group-item">School: ${el.school}</li>
                        </ul>
                    </div>
                </div>
            </div>`

            results.push(res);
        });
        
        return results;
    }

    renderHTML() {
        const managerCard = this.renderManagerCard();
        const engineerCard = this.renderEngineerCard();
        const internCard = this.renderInternCard();

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Template</title>
    <!-- Own Styles -->
    <link rel="stylesheet" href="style.css">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <!-- Header -->
    <header class="container-fluid">
        <h1>My team</h1>
    </header>


    <!-- Main Content / Cards -->
    <main class="container mt-3">
            <!-- Manager Card Template -->
            ${managerCard}

            <!-- Engineer Card Template -->
            ${engineerCard.map(e => (`${e}`)).join("")}

            <!-- Intern Card Template -->
            ${internCard.map(e => (`${e}`)).join("")}
        </div>
    </main>

    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>
</html>`;
    }

}

module.exports = Generator;