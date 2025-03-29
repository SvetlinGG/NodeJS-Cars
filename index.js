const http = require('http');
const indexTemplate = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addCarHtml = require('./views/addCar.html');
const addTypeHtml = require('./views/addType.html');
const editCarsHtml = require('./views/editCars.html')

const port = 3000;

const cars = [
    {
        id: 1,
        imageUrl: 'https://noticias.coches.com/wp-content/uploads/2019/07/ford_mustang-gt-performance-pack-level-2-2017_r16.jpg',
        name: 'Ford',
        type: 'Mustang',
        description: 'Ford Mustang GT Performance Pack Level 2 2017'
    },
    {
        id: 2,
        imageUrl: 'https://performancedrive.com.au/wp-content/uploads/2021/12/2021-Lexus-electric-sports-car-concept-LFA-successor-1.jpeg',
        name: 'Lexus',
        type: 'LF-LC GT Vision Gran Turismo',
        description: 'The LF-LC concept has been given a racing makeover as the Lexus LF-LC GT Vision Gran Turismo, which will debut in the next few months in the PlayStation 3 racing game Gran Turismo 6',
    },
    {
        id: 3,
        imageUrl: 'https://www.topgear.com/sites/default/files/2023/06/_DSF4308_ret_lores.jpg',
        name: 'Porche',
        type: '911 Turbo S Stinger GTR 2021',
        description: 'TopCar Porsche 911 Turbo S Stinger GTR 3 2021 4K 8K 4'
    }
]



const server = http.createServer((req, res) => {

    if ( req.url === '/styles/site.css'){
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }

    switch(req.url){
        case '/':
            res.write(indexTemplate(cars));
            break;
        case '/cars/add-car':
            res.write(addCarHtml);
            break;
        case '/cars/add-type':
            res.write(addTypeHtml);
            break;
        case '/cars/edit-car':
            res.write(editCarsHtml);
            break;

    }

    res.end();
});

server.listen(port);
console.log(`Server is listening on http://localhost:${port}...`);
