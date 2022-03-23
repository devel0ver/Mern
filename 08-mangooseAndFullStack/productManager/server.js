const express = require('express');
const app = express();
const port = 8000;

//cors import -> this will allow our backend API to communicate with a front end application
const cors = require('cors');   //cross origin resource sharing (cors)

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

require('./server/config/mongoose.config')

require('./server/routes/product_manager.route')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );