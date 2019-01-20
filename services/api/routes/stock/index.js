const request   = require('tedious').Request;
const TYPES     = require('tedious').TYPES;

module.exports = function(req, res) {
    const type      = req.params.type;
    const items     = [];
    const sqlreq    = new request("SELECT [RECORDER] AS [id], [DESC#1] AS [description], [ITEMNO] AS [item_number], [STATUS] AS [status] FROM [Stock] WHERE [TYPE] = @type", (err, rowCount) => {
        if (err) console.log(err);
    });

    sqlreq.addParameter('type', TYPES.Int, type);

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

    this.mssql.execSql(sqlreq);
};