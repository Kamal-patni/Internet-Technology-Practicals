const data = require("./pets.json")
const fs = require('fs')
function fetchAllPets() {
    return new Promise((resolve, reject) => {
        fs.readFile('./pets.json', 'utf8', (err, content) => {
            if (err) {
                reject(err)
            } else {
                try {
                    // console.log(content);
                    resolve(content);
                } catch (err) {
                    reject(err)
                }
            }
        })
    });
}
function addOnePet(petObject) {
    const newData = [petObject, ...data];
    fs.writeFileSync("./pets.json", JSON.stringify(newData), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
    return new Promise((resolve, reject) => {
        resolve(JSON.stringify(newData))
    })
}
module.exports = {
    fetchAllPets,
    addOnePet
}