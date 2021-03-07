
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');
const db =require('./models/db');


const app = express();
app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname : 'hbs',
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname+'/views/'
}));

app.set('view engine','hbs');

app.use('/',orderController);



const port = 7656
app.listen(port,()=>{
    console.log(`server is running at :http://localhost:${port}`)
});






