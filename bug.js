```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument(db, filter, update) {
  try {
    const result = await db.collection('myCollection').updateOne(filter, update);
    console.log(result);
    if (result.modifiedCount === 0) {
      console.error('No documents were updated.');
    } 
  } catch (err) {
    console.error('Error updating document:', err);
  }
}

async function main(){
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('myDatabase');
    await updateDocument(db, { name: 'John Doe' }, { $inc: { age: 1 }});
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
```