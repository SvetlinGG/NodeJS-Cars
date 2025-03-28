module.exports = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
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
        <h1>Super Cars</h1>
    </header>
    <main>
        <form action="#" method="" class="cat-form" enctype="multipart/form-data">
            <h2>Add Car</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label for="image">Image</label>
            <input name="upload" type="file" id="image">
            <label for="group">Type</label>
            <select name="breed" id="group">
                <option value="Fluffy Cat">GTR</option>
				<option value="Fluffy Cat">Turbo</option>
				<option value="Fluffy Cat">Mustang</option>
            </select>
            <button type="submit">Add Car</button>
        </form>
    </main>
</body>

</html>`