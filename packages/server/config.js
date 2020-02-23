const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const myip = "192.168.99.100";
const localip = "127.0.0.1";
const ip = myip;
const port = "27017";
const db = "graphqldb";

const url = `mongodb://${ip}:${port}/${db}`;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
