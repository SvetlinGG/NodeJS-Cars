module.exports = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <title>Cat Shelter</title>
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
        <h1>Super Cars</h1>
    </header>
    <main>
        <form action="#" method="" class="cat-form" enctype="multipart/form-data">
            <h2>Edit Car</h2>
            <label for="name">Name</label>
            <input type="text" id="name" value="Super Car">
            <label for="description">Description</label>
            <textarea id="description">Ford Mustang GT Performance Pack Level 2 2017</textarea>
            <label for="image">Image</label>
            <input type="file" id="image">
            <label for="group">Car Type</label>
            <select id="group">
                <option value="Super Car">Super Car</option>
            </select>
            <button>Edit Car</button>
        </form>
    </main>
</body>

</html>`