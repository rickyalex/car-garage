var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://ricky:mlab2017@ds255308.mlab.com:55308/lexadata";
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set cross origin true
app.use(cors({origin: true}));

//make the server run at port 8080
var port = process.env.PORT || 8080;

var router = express.Router(); 

//=================== CARS =====================//

router.post('/car/add', function(req, res) {
    res.json({ message: JSON.stringify(req.body) });   

    const insertDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('cars');
		// Insert some documents
		collection.insert([
			{Brand: req.body.Brand, Model: req.body.Model, Year: req.body.Year, Color: req.body.Color, Mileage: req.body.Mileage, Engine: req.body.Engine, Power: req.body.Power, RegisDate: req.body.RegisDate, Price: req.body.Price}
			], function(err, result) {
		    if (err) throw err;
		    console.log("Insert success");
			});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		insertDocuments(db, function() {
	    	client.close(); 
		});
	});
});

// router.get('/car/:id', function(req, res) {
// 	const carId = ObjectId(req.params.id);
//     const getDocuments = function(db, callback) {
// 		// Get the documents collection
// 		const collection = db.collection('cars');
// 		// Find all documents
// 		collection.find({ "_id": carId }).toArray(function(err, docs) {
// 		    res.json({result: docs});
// 		});
// 	}

// 	MongoClient.connect(url, function(err, client) {
// 		if (err) throw err;
	  
// 		const db = client.db('lexadata');

// 		getDocuments(db, function() {
// 	    	client.close(); 
// 		});
// 	});
// });

router.get('/car/find/:id', function(req, res) {
	const carId = ObjectId(req.params.id);
    const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('cars');
		// Find all documents
		collection.find({ "_id": carId }).toArray(function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});
});

router.get('/car/listbygarage/:id', function(req, res) {
	const garageID = req.params.id;
    const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('cars');
		// Find all documents
		collection.find({ GarageID: garageID }).toArray(function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});
});

router.put('/car/update/:id', function(req, res) {
    const carId = ObjectId(req.params.id);
   const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('cars');
		// Find all documents
		collection.update({ "_id": carId }, req.body, function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});
});

router.get('/car/list', function(req, res) {
    const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('cars');
		// Find all documents
		collection.find({}).toArray(function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});

});

// router.put('/car/edit/:id', function(req, res) {
//     const db = req.db;
//     const carId = req.params.id;
//     db.collection('cars').update({ _id: ObjectId(carId)}, req.body, function (err, result) {
//         res.send(
//             (err === null) ? {msg: ''} : {msg: err}
//         );
//     });
// });

//================================================//

router.post('/garage/add', function(req, res) {
    res.json({ message: JSON.stringify(req.body) });   

    const insertDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('garages');
		// Insert some documents
		collection.insert([
			{Name: req.body.Name, Address: req.body.Address, Email: req.body.Email, Phone: req.body.Phone, MaxCars: req.body.MaxCars}
			], function(err, result) {
		    if (err) throw err;
		    console.log("Insert success");
			});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		insertDocuments(db, function() {
	    	client.close(); 
		});
	});
});

router.get('/garage/list', function(req, res) {
    const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('garages');
		// Find all documents
		collection.find({}).toArray(function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});

});

router.get('/garage/find/:id', function(req, res) {
	const garageId = ObjectId(req.params.id);
    const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('garages');
		// Find all documents
		collection.find({ "_id": garageId }).toArray(function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});
});

router.put('/garage/update/:id', function(req, res) {
    const garageId = ObjectId(req.params.id);
   const getDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('garages');
		// Find all documents
		collection.update({ "_id": garageId }, req.body, function(err, docs) {
		    res.json({result: docs});
		});
	}

	MongoClient.connect(url, function(err, client) {
		if (err) throw err;
	  
		const db = client.db('lexadata');

		getDocuments(db, function() {
	    	client.close(); 
		});
	});
});

//give a prefix 'api' for each api requests
app.use('/api', router);

app.listen(port);
console.log('Server started on port ' + port);