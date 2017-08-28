require('dotenv').config();
const {
    PORT: port,
    MONGO_URI: mongoUri
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose')

const app = new Koa();
const api = require('./api');

mongoose.connect(mongoUri, {
    useMongoClient: true
})
const db = mongoose.connection
db.on('error', () => console.log('connection error'));
db.once('open', () => console.log('you\'re connected on db!'));

const router = new Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.use(bodyParser());
app.use(async ctx => ctx.body = 'hello world');

app.listen(port, () => console.log(`app is listening on ${port}!`));