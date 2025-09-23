import express from 'express';
import databaseConnection from './config/db.js';
const port = 10000;
const app = express();
databaseConnection();
app.get('/', (req, res) => (res.send("hello testing asdsthe ts with node")));
app.get('/hi', (req, res) => (res.send("hi testing the ts with node")));
app.listen(port, () => console.log(`listening on port 8000`));
console.log("hello world");
//# sourceMappingURL=server.js.map