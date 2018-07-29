const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000);

var data = [
    {
        id:1,
        fullName:"Kyle Coberly",
        title:"Faculty Director",
        numberOfDogs:0
    },
    {
        id:2,
        fullName:"Danny Fritz",
        title:"Lead Instructor",
        numberOfDogs:0
    },
    {
        id:3,
        fullName:"CJ Reynolds",
        title:"Lead Instructor",
        numberOfDogs:0
    },
    {
        id:4,
        fullName:"Brooks Patton",
        title:"Lead Instructor",
        numberOfDogs:0
    },
    {
        id:5,
        fullName:"Roberto Ortega",
        title:"Lead Instructor",
        numberOfDogs:1
    },
    {
        id:6,
        fullName:"Chad Drummond",
        title:"Instructor",
        numberOfDogs:0
    },
    {
        id:7,
        fullName:"Kim Schlesinger",
        title:"Instructor",
        numberOfDogs:0
    },
    {
        id:8,
        fullName:"Peter Ostiguy",
        title:"Associate Instructor",
        numberOfDogs:1
    },
    {
        id:9,
        fullName:"Cass Torske",
        title:"Resident",
        numberOfDogs:1
    },
    {
        id:10,
        fullName:"Matt Winzer",
        title:"Resident",
        numberOfDogs:2
    },
    {
        id:11,
        fullName:"Aaron Goodman",
        title:"Resident",
        numberOfDogs:0
    },
    {
        id:12,
        fullName:"Michelle Bergquist",
        title:"Resident",
        numberOfDogs:1
    }

];

function findByID(id){
    return data.filter( i => i[id] == id)[0];
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

app.listen(port);