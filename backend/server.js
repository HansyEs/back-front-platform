const _ = require('lodash'); // <- lodash for de-duplication
const express = require('express');
const app = express();
const cors = require('cors');

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
app.get('/api/v1.0/users_test/:id?/:page?/:howmany?',function(req,res){
    res.write('\nID del usuario  = '+req.params['id']);
    res.write('\npagina  = '+req.params['page']);
    res.write('\ncuantos  = '+req.params['howmany']);
    res.write('\n');
    // Ahora sacamos parametros adicionales si los hay.... ?page=5&howmany=20
    res.write('parametros: \n');
    url = require('url');
    var query = url.parse(req.url,true).query;
    res.write(JSON.stringify(query)+'\n\n');

    // Ahora los datos reales
    var found=false;
    if (req.params['id']){
        users.filter(function(user){
            if(user.id == req.params['id']){
                res.write('\nLos datos del usuario '+req.params['id']+' son '+JSON.stringify(user));
                found = true;
            }
        });
        if (!found){
            res.write('\nUsuario no encontrado');
        }
    } else {
        res.write(JSON.stringify(users));
    }
    res.end(); 
});

app.get('/api/v1.0/users/:id?',function(req,res){
    // Tiene derechos???
    var response;
    var found=false;
    if (req.params['id']){
        users.filter(function(user){
            if(user.id == req.params['id']){
                response = user;
                found = true;
            }
        });
        if (!found){
            response = {error:"User not Found"};
        }
    } else {
        response = users;
    }
    res.json(response);
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