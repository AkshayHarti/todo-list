const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const myip = "192.168.99.100";
const localip = "127.0.0.1";
const ip = localip;
const port = "27017";
const db = "todo-db";
let url = "";
const localMongo = `mongodb://${ip}:${port}/${db}`;
const prodMongo = "mongodb://akshay:akshay123@ds237357.mlab.com:37357/todo-db";

const mongoUrl = process.env.NODE_ENV === "production" ? prodMongo : localMongo;

mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${mongoUrl}`)
);
