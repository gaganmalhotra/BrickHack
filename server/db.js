var PouchDB = require('pouchdb');

var db = new PouchDB('flightInfo');



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


//getFlightsInfo();
