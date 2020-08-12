import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.join(process.cwd(), 'database', 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default db;
