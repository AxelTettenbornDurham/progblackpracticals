const express = require('express');
const app = express();

app.use(express.static('client'));

let instruments = [ 'piano', 'concertina', 'double bass'];

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.get('/image', function (req, resp){
    fetch('https://randomfox.ca/floof/')
    .then((response) => {
        return response.json()
    })
    .then(data => {
        resp.send(data.image)
    })
});

app.listen(8090);