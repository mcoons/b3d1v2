const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000);

var data = [
    {
        "ID":1,
        "Full Name":"Kyle Coberly",
        "Title":"Faculty Director",
        "Number of Dogs":0
    },
    {
        "ID":2,
        "Full Name":"Danny Fritz",
        "Title":"Lead Instructor",
        "Number of Dogs":0
    },
    {
        "ID":3,
        "Full Name":"CJ Reynolds",
        "Title":"Lead Instructor",
        "Number of Dogs":0
    },
    {
        "ID":4,
        "Full Name":"Brooks Patton",
        "Title":"Lead Instructor",
        "Number of Dogs":0
    },
    {
        "ID":5,
        "Full Name":"Roberto Ortega",
        "Title":"Lead Instructor",
        "Number of Dogs":1
    },
    {
        "ID":6,
        "Full Name":"Chad Drummond",
        "Title":"Instructor",
        "Number of Dogs":0
    },
    {
        "ID":7,
        "Full Name":"Kim Schlesinger",
        "Title":"Instructor",
        "Number of Dogs":0
    },
    {
        "ID":8,
        "Full Name":"Peter Ostiguy",
        "Title":"Associate Instructor",
        "Number of Dogs":1
    },
    {
        "ID":9,
        "Full Name":"Cass Torske",
        "Title":"Resident",
        "Number of Dogs":1
    },
    {
        "ID":10,
        "Full Name":"Matt Winzer",
        "Title":"Resident",
        "Number of Dogs":2
    },
    {
        "ID":11,
        "Full Name":"Aaron Goodman",
        "Title":"Resident",
        "Number of Dogs":0
    },
    {
        "ID":12,
        "Full Name":"Michelle Bergquist",
        "Title":"Resident",
        "Number of Dogs":1
    }

];

function findByID(id){
    return data.filter( i => i["ID"] == id)[0];
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {data: data });
});

app.get("/:id", (request, response) => {
    let instructor = findByID(request.params.id);
     
    instructor 
    ? response.json({data: instructor} )
    : response.status(404).json({error: {"message":"No record found!"} });
});

app.listen(port)