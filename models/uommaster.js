const Sequelize = require('sequelize');


const db = require('../Sequelize');


const _uommaster = db.define('uommaster',{

    uomcode: Sequelize.STRING,
    uomdesc: Sequelize.STRING,
  
    Void: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    voidedAt: Sequelize.DATE,

},{
    tableName: 'uommaster'
})




module.exports = {
 _uommaster
 
}


_uommaster.sync({
   
    alter:false
}).catch(err => console.log(err))
