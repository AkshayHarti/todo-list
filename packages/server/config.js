const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const myip = "192.168.99.100";
const localip = "127.0.0.1";
const ip = localip;
const port = "27017";
const db = "todo-db";
let url = "";

if (process.env.NODE_ENV === "production") {
  url = process.env.MONGO_CONN_STRING;

  //mongodb+srv://akshay@cluster0-dgat9.mongodb.net/admin?replicaSet=Cluster0-shard-0&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=TodoDB-mongo-cloud&3t.databases=admin,todo-db
  // "mongodb://akshay:akshay123@ds237357.mlab.com:37357/todo-db";
} else {
  url = `mongodb://${ip}:${port}/${db}`;
}
console.log(process.env.NODE_ENV);

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
