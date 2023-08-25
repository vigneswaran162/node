const Sequelize = require('sequelize');


const db = require('../Sequelize');


const _itemaster = db.define('itemmaster',{

    itemdescription: Sequelize.STRING,
    uom: Sequelize.STRING,
    itemtax: Sequelize.DECIMAL(4,2),
    openitem: Sequelize.STRING,
    creationdate:Sequelize.DATEONLY,
    Void: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    voidedAt: Sequelize.DATE,
   
   

},{
    tableName: 'itemmaster'
});

_itemaster.sync({
    force: db.forcetable,
    alter: false,
  })



const _itemrate = db.define('itemrate', {
   
    itemdesc: Sequelize.STRING,
    posdesc: Sequelize.STRING,
    Rate: Sequelize.STRING,
    Void: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    voidedAt: Sequelize.DATE,
    tax:Sequelize.STRING,
   
}, {
    tableName: 'itemrate'
});


const _itemreport = db.define('itemreport', {
   
    itemlist: Sequelize.STRING,
    Type: Sequelize.STRING,
    FromDate: Sequelize.DATE,
    ToDate: Sequelize.DATE,
    createdBy: Sequelize.STRING    
   
}, {
    tableName: 'itemreport'
});

module.exports = {
 _itemaster,
  _itemrate,
  _itemreport
}

_itemrate.sync({
    force: db.forcetable,
    alter: false,
}).catch(err => console.log(err))

_itemaster.sync({
   
    alter:false
}).catch(err => console.log(err))

_itemreport.sync({
   
    alter:true
})

