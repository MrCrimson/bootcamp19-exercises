/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const name = process.argv[2]
const googleMapsClient = require('./google_api.js')

googleMapsClient.findPlace({input: name, inputtype: 'textquery'}).asPromise()
  .then((response) => {
    let place_id
    if (response.json.candidates != 0) {
        place_id = response.json.candidates[0]['place_id']    
    }
    googleMapsClient.place({placeid: String(place_id)}).asPromise()
    .then((response) => {
        console.log(name + " is located at the coordinates " + response.json.result.geometry.location.lat + ", " + response.json.result.geometry.location.lng + " at the address " + response.json.result.formatted_address); 
    })
    .catch((err) => {
        console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });


 