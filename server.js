const http = require("http");
const {getPets,addPet} = require("./petcontroller.js");
const server = http.createServer((request, res) => {
    if (request.url === "/api/pets" && request.method === "GET") {
        getPets(request, res);
    } else if (request.url === "/api/add/pet" && request.method === "POST") {
        addPet(request, res);
    } else {
        console.log("hit 3");
        addPet(request, res);
    }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

