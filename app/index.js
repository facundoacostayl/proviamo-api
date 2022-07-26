const {app, port} = require('./app');

const start = () => {
    app.listen(port, () => console.log("Connected"))
};

start();