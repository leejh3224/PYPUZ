require('dotenv').config();
const {
    PORT: port,
    MONGO_URI: mongoUri
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors')

const mongoose = require('mongoose')

const app = new Koa();
const api = require('./api');
const jwtMiddleware = require('lib/middlewares/jwt');

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, {
    useMongoClient: true
})
const db = mongoose.connection
db.on('error', () => console.log('connection error'));
db.once('open', () => console.log('you\'re connected on db!'));

app.use(bodyParser());
app.use(cors())
app.use(jwtMiddleware);

const router = new Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`app is listening on ${port}!`));