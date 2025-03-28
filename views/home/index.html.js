
const carTemplate = require('../car.html')

module.exports = (cars) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="/styles/site.css">
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" />
    <title>Cars</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cars/add-type">Car Type</a></li>
                <li><a href="/cars/add-car">Add Car</a></li>
            </ul>
        </nav>
        <h1>Cars</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
                ${cars.map(carTemplate).join('\n')}
            </ul>
        </section>
    </main>

</body>

</html>`