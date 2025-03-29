module.exports = (car) => `
    <li>
        <img src="${car.imageUrl}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p><span>Type: </span>${car.type}</p>
        <p><span>Description: </span>${car.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cars/edit-car">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>
`