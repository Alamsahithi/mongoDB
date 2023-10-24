const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _dbb;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://sahithialam:<password>@cluster0.fvxqa6t.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db()
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err
    });
};

const getDb =() => {
  if(_db){
    return _db
  }
  throw "no database found"
}

module.exports = mongoConnect;
module.exports=getDb