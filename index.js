const fs = require('fs');


function main() {
    const data = {
        name: "Some name",
        phone: "8 (747) 487 48 48",
        location: {
            address: "Some address (street, house number)",
            lng: 76.484848,
            lat: 46.155454
        }
    };

    fs.writeFileSync('data.json', JSON.stringify(data));
}


main();