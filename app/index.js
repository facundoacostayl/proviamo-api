const { app, port } = require('./app');
const { dbConnect } = require('../config/config');

const start = () => {
    app.listen(port, () => console.log("Connected"))
    dbConnect();
};

start();