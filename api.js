var Db= require('./dboperations');
var order = require('./item_master')
const dboperations = require('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const  _itemrate = require('../node_api/routes/itemrate');
const _itemaster = require('../node_api/routes/itemrate')
const _uommaster = require('../node_api/routes/uommaster');
const _posmaster = require('../node_api/routes/posmaster');
const itemsMaster = require('./item_master');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })

//itemmaster//
router.get('/alldata',_itemaster.GetAllData)
router.get('/item',_itemaster.Getall)
router.post('/insert',_itemaster.Insertitem)
router.get('/getbyid', _itemaster.GetById);
router.post('/update',_itemaster.Update)
router.post('/void',_itemaster.Delete)
router.get('/ItemMaster', _itemaster.getview)
router.post('/SetReport', _itemaster.setReport)


//uom//

router.get('/uom',_uommaster.Getall)
router.post('/adduom',_uommaster.Insertuom)


//pos//


router.get('/pos',_posmaster.Getall)
router.post('/addpos',_posmaster.Insertpos)



// router.route('/orders/:id').get((request,response)=>{

//     dboperations.getitemmasterid(request.params.id).then(result => {
//        response.json(result[0]);
//     })

// })

// router.route('/orders/:uom').get((request,response)=>{
//    console.log(response)
//    dboperations.getdesc(request.params.uom).then(result => {
//       response.json(result[0]);
//    })

// })

// router.route('/orders').post((request,response)=>{

//     let order = {...request.body}

//     dboperations.additem(order).then(result => {
//        response.status(201).json(result);
//     });

// })

// router.route('/updateorders').post((request,response)=>{

//    let order = {...request.body}

//    dboperations.updateitem(order).then(result => {
//       response.status(201).json(result);
//    });

// })

// router.route('/deleteitem').post((request,response)=>{

//    let order = {...request.body}

//    dboperations.deleteitem(order).then(result => {
//       response.status(201).json(result);
//    });

// })







// router.route('/itemratemaster').post((request,response)=>{

//    let order = {...request.body}

//    dboperations.itemmasterrate(order).then(result => {
//       response.status(201).json(result);
//    });

// })


var port = process.env.PORT ||  8098
app.listen(port);
console.log('Order API is runnning at ' + port);


// dboperations.getitemmaster().then(result =>{
//     console.log(result);
// })