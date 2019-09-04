/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

const request = require('request');

function main(params) {

  return new Promise((resolve, reject) => {
    // call tomtom api to get the accident json and return to watson
    //let url = https://api.tomtom.com/traffic/services/4/incidentDetails/s3/6841263.950712,511972.674418,6886056.049288,582676.925582/10/-1/json?key=*****
    const base_path = "https://api.tomtom.com/traffic/services/4/incidentDetails/s3/"

    let x_lat = 37.788372;
    let x_long = -122.388673;
    let y_lat = 37.827426;
    let y_long = -122.295791;

    if (params.accident) {
      x_lat = 6841263.950712;
      x_long = 511972.674418;
      y_lat = 6886056.049288;
      y_long = 582676.925582;
    }


    let url = base_path + x_lat + ',' + x_long + ',' + y_lat + ',' + y_long + "/10/-1/json?key=" + params.tomtom_api;

    request(url, (error, response, body) => {
      if (error) {
        reject({ result: error })
      }
      var result = JSON.parse(body);
      // console.log(result);
      console.log(result);
      resolve({ result: result })
    })

    return { message: 'Hello World' };
  });

}

// try it locally
const tomtom_api = "";
main({ "tomtom_api": tomtom_api })
