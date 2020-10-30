const path = require('path');

module.exports = [{
    name: "Lottery",
    entry: "./src/lottery.js",
    output: {
        path : path.join(__dirname, 'dist','js'),
        filename: "lottery.js",
        library: {
            name: "Lottery",
            type: "umd"
        }
    }
},
    {
        name: "Orders",
        entry: "./src/orders.js",
        output: {
            path : path.join(__dirname, 'dist','js'),
            filename: "orders.js",
            library: {
                name: "Orders",
                type: "umd"
            }
        }
    }
]