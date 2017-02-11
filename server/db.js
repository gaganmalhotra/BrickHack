var PouchDB = require('pouchdb');

var db = new PouchDB('http://localhost:5984/flights');



var getFlightsInfo = function () {

  db.put({
    _id: 'sampleFlightInfo',
    title: 'skyscanner'
  }).then(function (response) {
    // handle response
  }).catch(function (err) {
    console.log(err);
  });

}


//Database information
db.info(function(err, info) {
   if (err) {
      return console.log(err);
   } else {
      console.log(info);
   }
});
/*
db.get('sampleFlightInfo').then(function(doc) {
  return db.put({
    _id: 'sampleFlightInfo',
    _rev: doc._rev,
    title: "Let's Dance"
  });
}).then(function(response) {
  console.log(response);


  // handle response
}).catch(function (err) {
  console.log(err);
});

*/
//getFlightsInfo();
