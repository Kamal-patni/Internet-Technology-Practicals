const PET = require("./petmodels.js");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};
async function getPets(request, res) {
    try {
        const students = await PET.fetchAllPets();
        res.writeHeader(200, headers);
        res.end(JSON.stringify(students));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
async function addPet(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const students = await PET.addOnePet(obj);
            res.writeHeader(200, headers);
            res.end(JSON.stringify(students));
        } catch (error) {
            console.log(error);
            console.log("problem while adding");
        }
    });
   
}
module.exports =  {
    getPets,
    addPet
}