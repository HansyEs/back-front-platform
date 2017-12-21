const _ = require('lodash'); // <- lodash for de-duplication
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//REQUIRE FAKE DATA
const items = require('./data/items.js');

app.get('/', function(req, res){
  res.send('Hello World!')
});

//API
app.get('/api/items', function(req, res){

	var response = [];

// TO DO -> Refactorizar -> Una unica fn para queries
// TO DO -> Leyendo url ?
	if(typeof req.query) {
		//console.info("Q",req.query,req._parsedUrl);
		// req.query === object
		// { flag: 'false', location: 'Lothroliel' }
	}

	// this would usually adjust your database query
	if(typeof req.query.flag != 'undefined'){
		items.filter(function(item){
			if(item.flag.toString() == req.query.flag){
				response.push(item);
			}
		});
	}

	// this would usually adjust your database query
	if(typeof req.query.location != 'undefined'){
		items.filter(function(item){
			if(item.location === req.query.location){
				response.push(item);
			}
		});
	}

	// de-duplication:
	response = _.uniqBy(response, 'id');

	// in case no filtering has been applied, respond with all items
	if(Object.keys(req.query).length === 0){
		response = items;
	}

	res.json(response);

});

app.listen(3000, function(){
  console.log('Server running on port 3000!')
});