const MongoClient = require('mongodb').MongoClient;
const url="mongodb://localhost:27017";

MongoClient.connect(url, function(err,db){
    if(err)
    throw(err);
    console.log("connected with database");
    db.close();
});