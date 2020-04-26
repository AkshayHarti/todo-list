const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const myip = "192.168.99.100";
const localip = "127.0.0.1";
const ip = localip;
const port = "27017";
const db = "todo-db";
let url = "";

if (process.env.NODE_ENV === "production") {
  url = "mongodb://akshay:akshay123@ds237357.mlab.com:37357/todo-db";
  // "mongodb://ubt40dsdp5m4ehdajxzi:w82yQv7ivLgR4euAqX0J@btg1fklfnkgc30r-mongodb.services.clever-cloud.com:27017/btg1fklfnkgc30r";
} else {
  url = `mongodb://${ip}:${port}/${db}`;
}
console.log(process.env.NODE_ENV);

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
