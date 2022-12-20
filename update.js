const {MongoClient} = require('mongodb');
const url= 'mongodb://127.0.0.1:27017';
const database='cricket'
const client=new MongoClient(url);

async function getData()
{
    let result=await client.connect();
    let db= result.db("cricket");
    return db.collection('mycollection');
   
}

const updatedata= async ()=>{
    let data=await getData();
    let result=await data.update(
        {first_name:'chintu'},{$set: {first_name:'sohan'}
    }
    );
    console.warn(result);
}
updatedata();