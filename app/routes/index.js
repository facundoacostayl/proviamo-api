const express = require('express');
const router = express.Router();
const app = express();
const fs = require('fs');

const currentPath = `${__dirname}`;

const removeExtension = (file) => {
    return file.split(".").shift();
}

fs.readdirSync(currentPath).filter(file => {
    const fileWithoutExtension = removeExtension(file);
    const skip = ["index"].includes(fileWithoutExtension);
    if(!skip) {
        console.log("** CONNECTED TO ROUTE " + fileWithoutExtension);
        router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`));
    }
})

module.exports = router;