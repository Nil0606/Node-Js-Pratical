const client=require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

client.connect(url, function (err, db) {
  if (err) throw err;
  var dbo=db.db("mydb2");
  var myobj = [
    { name: "Nil Patel", city: "Ahmedabad" },
    { name: "Abhi Patel", city: "Gandhinagar" },
    { name: "Harsh Patel", city: "Aanand" },
    { name: "Harshil Patel", city:"Surat"},
    { name:"Mosasm Patel" , city:"Vadodara"},
  ];
  dbo.collection("customers").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 
//finding in collection return one document
client.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
  dbo.collection("customers").findOne({}, function (err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
//finding in coolection return all document
client.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
  dbo
    .collection("customers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      
    });
  //query in database
  var query = { city: "Ahmedabad" };
  dbo
    .collection("customers")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  //sort the result
  var mysort={name:1}; // 1 from ascending and  -1 for descending
  dbo
    .collection("cutomers")
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
    });
    //update
     var myquery = { city: "Gandhinagar" };
     var newvalues = { $set: { name: "Meet patel", city: "Amreli" } };
     dbo
       .collection("customers")
       .updateOne(myquery, newvalues, function (err, res) {
         if (err) throw err;
         console.log("1 document updated");
       });
      //delete
       var myquery = { address: "Ahmedabad" };
       dbo.collection("customers").deleteOne(myquery, function (err, obj) {
         if (err) throw err;
         console.log("1 document deleted");
       });
       //collection deleted
        dbo.collection("customers").drop(function (err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
          console.log("finished task");
        });
}); 


