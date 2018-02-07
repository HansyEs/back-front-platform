const _ = require('lodash'); // <- lodash for de-duplication
const express = require('express');
const app = express();
const cors = require('cors');
var MongoClient = require( 'mongodb' ).MongoClient; // Conexion con MongoDB

app.use(cors());

//REQUIRE FAKE DATA
const items = require('./data/items.js');
const users = require('./data/users.js');

app.get('/', function(req, res){
  res.send('Server ON!')
});

/*API
    Es muy importante versionar las llamadas de la api, eso permite tener activas sinultaneamente apis antiguas y nuevas, 
    por ejemplo para pruebas de una nueva versión o que la aplicación movil no este actualizada y tire todavía de las apis antiguas.
    Así una versión puede retornar un JSON y la otra otro completamente distinto atendiendo a las nuevas necesidades y las dos conviven sin problemas
*/

// Petición de usuarios
// Si no recibe el id debe devolver toda la lista de usuarios.
var mongoURL = 'mongodb://user_1:TtM4r1n4s@ds121088.mlab.com:21088/test1';

app.get('/api/v1.0/users/:id?',function(req,res){
    // Tiene derechos???
    //console.log("ESTOY AQUI");
    var response;
    var status = 200;
    var found=false;

        MongoClient.connect( mongoURL, (err, client) => {
            //console.log(db);
            if(err) throw err;

            const data = client.db('test1');

            //console.log("_id",req.params['id']);
            var query = Number(req.params['id']);
            var field = '';
            if (req.params['id']){
                field = {
                    'user_id':query
                }
            }
            data.collection('users').find().toArray(function(findErr,resp){

                if (findErr) throw findErr;
                if (field==''){
                    response = resp;
                } else {
                    response = resp[0];
                }

                res.json(response);
                client.close();

            })
            
        });
    
});

app.get('/api/v1.0/authFirebase/:id?',function(req,res){
    // Tiene derechos???
    //console.log("ESTOY AQUI");
    var response;
    var status = 200;
    var found=false;

        MongoClient.connect( mongoURL, (err, client) => {
            //console.log(db);
            if(err) throw err;

            const data = client.db('test1');

            //console.log("_id",req.params['id']);
            var query = req.params['id'];
            var field = '';
            if (req.params['id']){
                field = {
                    'type':"firebase",
                    "token":query
                }
            } else {
                res.json(0);
            }
            data.collection('auths').find(field).toArray(function(findErr,resp){
                
                if (findErr) throw findErr;
                
                // console.log("field",field);
                // console.log("AQUI",resp[0]);
                if (resp.length>0){
                    response = resp[0].user_id;
                } else {
                    response = false;
                }
                
                res.json(response);
                client.close();

            })
            
        });
    
});


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