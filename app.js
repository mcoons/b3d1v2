const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000)


// ID,Full Name,Title,Number of Dogs
// 1,Kyle Coberly,Faculty Director,0
// 2,Danny Fritz,Lead Instructor,0
// 3,CJ Reynolds,Lead Instructor,0
// 4,Brooks Patton,Lead Instructor,0
// 5,Roberto Ortega,Lead Instructor,1
// 6,Chad Drummond,Instructor,0
// 7,Kim Schlesinger,Instructor,0
// 8,Peter Ostiguy,Associate Instructor,1
// 9,Cass Torske,Resident,1
// 10,Matt Winzer,Resident,2
// 11,Aaron Goodman,Resident,0
// 12,Michelle Bergquist,Resident,1

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
    },

];

function findByID(id){
    var retval;
    data.forEach( c => {if (c["ID"] == id) {retval = c}})
    return retval;
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {data: data });
});

app.get("/:id", (request, response) => {
    let instructor = findByID(request.params.id);
    response.json( 
        instructor 
        ? {data: instructor} 
        : {error: {"message":"No record found!"} }
    );
});

app.listen(port)