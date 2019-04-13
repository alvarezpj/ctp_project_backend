const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const axios = require('axios');
const middlewares = {
     api_request(req, res, next){
        console.log(req.body);
        const {
            limit,
            keywords
        } = req.body;
        let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&page=${limit}&text=${keywords}&key=${config.meetup_api_key}`
        console.log(url);
        
        axios.get(url)
        .then(function (response) {
          // handle succes
          console.log(response.data);
          return res.json({status: 200, response: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });        // make a request to api route meetup
        // take env from process.env.meetup
        // make the request to meetup using params from req.body
        // retur nthat request to user
        // return res.json({status: 200, url})
    }
}


module.exports = middlewares