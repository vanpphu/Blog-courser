const path = require('path');
const express = require('express');
var morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars').engine;

const route = require('./routes');
const db = require('./config/db');

//Connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
// HTTP logger
app.use(morgan('combined'));
// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
// app.set('view', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at  http://localhost:${port}`);
});
