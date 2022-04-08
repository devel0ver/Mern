const express = require('express'); //require is how we import a node module
const cors = require('cors');   //cross-origin-resource-sharing-> allows our express backend app to share resources (data!) with our front end react application
require('dotenv').config(); //so that we can read the information about our secret key which is stored in the .env file
const cookieParser = require('cookie-parser');  //so that the server can understand the cookie information coming in from the client (browser)

const app = express();  //initialize an instance of express (an application)
const port = 8000;



app.use(  express.json() ); //enable the app to parse json
app.use( express.urlencoded({ extended:true }) )  //enable the app to be able to collect form instanceof. Post requests wont work without this
app.use( cors({credentials: true, origin: 'http://localhost:3000'}) )   //enable cors
app.use(cookieParser());

require('./server/config/mongoose.config'); //connect our application to the mongodb database using mongoose as a middleman. mongoose is our ORM (object relational mapper)

require('./server/routes/user.routes')(app);   //passing in the app object to the routes so the routes can do things like app.get app.post, etc.

app.listen(port, () => console.log(`Listening on port: ${port}`) );