const express       = require("express");
const app           = express();
const connection    = require('tedious').Connection;
const request       = require('tedious').Request;

app.get('/', (req, res) => {
    //set up the connection information
    const config = {
        userName: 'sa',
        password: 'eiY0chuzedai#gh', // update me
        server: 'localhost',
        options: {
            database: 'IHDATA'
        }
    };

    const items = [];

    const conn = new connection(config);

    conn.on('connect', err => {
        if (err) {
            console.log(err);
        } else {
            const sqlreq = new request("SELECT [RECORDER] AS [id], [DESC#1] AS [description], [ITEMNO] AS [item_number], [STATUS] AS [status] FROM [Stock]", (err, rowCount) => {
                if (err) console.log(err);
            });

            sqlreq.on('row', columns => {
                const rowObject = {};

                columns.forEach(column => {
                    if (column.value !== null)
                        rowObject[column.metadata.colName] = column.value;
                });

                items.push(rowObject);
            });

            sqlreq.on('doneProc', (rowCount, more, rows) => {
                if (!more) res.json({ items });
            });

            conn.execSql(sqlreq);
        }
    });
});

const server = app.listen(8280, () => {
    console.log("Listening on port %s...", server.address().port);
});