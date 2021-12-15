const assert = require('assert');

//db - name of db
// document -- document informaiton
//collection -- to which collection we are gonna insert
// call back function

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection); // coll - collection
    coll.insert(document, (err, result) => {
        assert.equal(err, null); // checks error is null or not, if not it will stop and print 
        // n - default property which says how many documents has been inserted
        console.log("Inserted " + result.result.n +
            " documents into the collection " + collection);
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);        
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log("Removed the document ", document);
        callback(result);        
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    //2nd param -- passing the fields, here update is the field,
    
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.equal(err, null);
        console.log("Updated the document with ", update);
        callback(result);        
    });
};
