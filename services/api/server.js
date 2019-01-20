const express       = require("express");
const app           = express();
const bb            = require('bluebird');
const connection    = require('tedious').Connection;
const routes        = require('./routes');

const getInstances = () => {
  return bb.props({
      mssql: getMssqlConn()
  })
};

const setup = insts => {
    app.get('/stock/:type', routes.stock.bind(insts));

    return insts;
};

const run = insts => {
    const server = app.listen(8280, () => {
        console.log("Listening on port %s...", server.address().port);
    });
};

const getMssqlConn = () => {
    // TODO: how to handle different databases?

    const config = {
        userName: 'sa',
        password: 'eiY0chuzedai#gh', // update me
        server: 'localhost',
        options: {
            database: 'IHDATA'
        }
    };

    const conn = new connection(config);

    return new bb((resolve, reject) => {
        conn.on('connect', err => {
            if (err) return reject(err);

            return resolve(conn);
        });
    });
};

getInstances().then(setup).then(run);