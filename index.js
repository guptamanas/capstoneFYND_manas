const {MongoClient} = require('mongodb');
const url= 'mongodb://127.0.0.1:27017';
const database='cricket'
const client=new MongoClient(url);

async function getData()
{
    let result=await client.connect();
    let db= result.db(database);
    return db.collection('mycollection');
   // let response= await collection.find({}).toArray();
   // console.log(response);
}

getData().then((resp)=>{
    resp.find({first_name:'tushar'}).toArray().then((data)=>{
        console.warn(data)
    })
})

//getData();