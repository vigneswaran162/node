const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const {
    _itemrate,_itemaster, _itemreport
} = require('../models/itemmasterrate');
const { response } = require('express');
const db = require('../Sequelize')



module.exports.GetAllData = async function (req, res) {
 

    try {
        let response1 = await _itemaster.findAll()
        let response2 = await _itemrate.findAll()
        res.send({
            Boolval: true,
            returnerror: "",
            data:response1,
            data2:response2
        })
       
    } catch (err) {
        res.send({
            Boolval: false,
            returnerror: err.message,

        });
    }
}





module.exports.Getall = async function (req, res) {
 

    try {
        let response = await _itemaster.findAll()
        // let response2 = await _itemrate.findAll()
        res.send(response);
        // res.send(response2);
       
    } catch (err) {
        res.send({
            Boolval: false,
            returnerror: err.message
        });
    }
}

module.exports.GetById = async function (req, res) {
    let data = req.query;
    let length = 0;

    try {
        let response1 = await _itemaster.findOne({
            where: {
                itemdescription:data.itemdescription
            }
        })
        let response2 = await _itemrate.findAll({
            where: {
                itemdesc:data.itemdescription
            }
        })
        res.send({
            Boolval: true,
            returnerror: "",
            data:response1,
            data2:response2,
           
        })
       
    } catch (err) {
        res.send({
            Boolval: false,
            returnerror: err.message,

        });
    }
}




module.exports.Insertitem = async function (req, res) {
    let data = req.body;
    let length = 0;
    console.log(data)
    try {
        let response = await _itemaster.findAll({
            where: {
                [Op.or]: {
                    itemdescription: data.itemdescription
                }
            }
        });
        length = response.length;
        if (length > 0) {
            res.send({
                Boolval: false,
                returnerror: "Item Description Already Exists"
            });
        } else {

            let resp = await _itemaster.create(data, {
                fields: ['itemdescription', 'uom', 'itemtax','openitem','creationdate','Void','createdAt','updatedAt','voidedAt']

            });
            let respdet = await _itemrate.bulkCreate(data.ItemMasterRatemodelt, {
                fields: ['itemdesc','posdesc','Rate','tax','Void','createdAt','updatedAt','voidedAt']
            });
            res.send({
                Boolval: true,
                returnerror: ""
            })
        }
    } 
    catch (err) {
        res.send({
            Boolval: false,
            returnerror: err.message
        });
    }
}



module.exports.Update = async function (req, res) {
    
   
    let data = req.body;
    console.log('data',data)

    try {
        let response = await _itemaster.update(data,  {
            fields: ['itemdescription', 'uom', 'itemtax','openitem','creationdate','Void','createdAt','updatedAt','voidedAt','tax'],
          
            where: {
            
                    itemdescription: data.itemdescription
                
            }
        });
            let respdet1 = await _itemrate.destroy({
            
                where: {
                    itemdesc:data.itemdescription
                }            
            });
            let respdet = await _itemrate.bulkCreate(data.ItemMasterRatemodelt, {
                fields: ['itemdesc','posdesc','Rate','tax'],
                where: {
                    itemdesc:data.itemdescription
                }    
            });
            res.send({
                Boolval: true,
                returnerror: ""
            })    
       
    } catch (err) {
        res.send({
            Boolval: false,
            returnerror: err.message,

        });
    }
    
   
}

module.exports.Delete = function (req, res) {
    let entity = req.body;
    /**
     * // #swagger.description = 'Delete an existing record'
     * // #swagger.summary = 'Delete an existing record'
     * 
     */
    _itemaster.update({
        Void: entity.Void,
       
        voidedAt: new Date()
    }, {
        where: {
            itemdescription: entity.itemdescription
        }
    }).then(response => {
        res.send({
            Boolval: true,
            returnerror: ""
        })
    }).catch(err => {
        res.status(401).send(err.message);
    })
}



module.exports.setReport = async function(req,res){
    let data = req.body;
    // console.log("data1:",data);
    let entity =[];
    try{
        for(let i=0;i<data.itemlist.length;i++){
            if(data.itemlist[i].isChecked == true){
               console.log("in");
               let obj ={
                itemlist:data.itemlist[i].itemdescription,
                FromDate:data.FromDate,
                ToDate:data.ToDate,
                createdBy:data.createdBy,
               }
               console.log("in1:");
               entity.push(obj)
            }
        }
        let dltres = await _itemreport.destroy({
           where:{}
        });
        console.log("data:",entity);
        let respdet = await _itemreport.bulkCreate(entity);
        res.send({
            Boolval: true,
            returnerror:""
        })
    }
    catch(err){
        res.send({
            Boolval: false,
            reportError: err.message
        })
    }
}

module.exports.getview = async function (req,res){
    let param = req.query
    console.log('p:',param);
    try{
        let qry = '';
        qry = " exec  GetItemDetails  '"+param.createdBy+"','"+param.Type+"','"+param.FromDate+"','"+param.ToDate+"'  ";
        let response = await db.query(qry)
        response = response[0];
        res.send(response);
    }
    catch(err){
        res.send(err.message)
    }
}