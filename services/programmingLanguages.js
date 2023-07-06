const db = require('./db');
const helper = require('../helper');

async function getMultiple() {
    const rows = await db.query(`SELECT * FROM myArticles`);
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    getMultiple
}