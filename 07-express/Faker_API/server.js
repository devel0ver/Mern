const express = require("express"); //import express so we can use express features
const app = express();  //create an instance of express and store it in the variable "app"
const port = 8000;  //indicate the port number to run on
const { faker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks. These next two lines help our app to work with post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            "street":  faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipcode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}
    
let fakeUser = new User()
app.get("/api/users/new", (req, res)=>{
    res.json({fakeUser})
})

let fakeCompany = new Company()
app.get("/api/companies/new", (req, res)=>{
    res.json({fakeCompany})
})

app.get("/api/user/company", (req, res)=>{
    res.json({fakeUser, fakeCompany})
})


//have this at the bottom of your file, this needs to below the other code blocks. This tells the app to listen for requests on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );