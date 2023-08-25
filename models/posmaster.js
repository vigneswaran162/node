const Sequelize = require('sequelize');


const db = require('../Sequelize');


const _posmaster = db.define('posmaster',{

    poscode: Sequelize.STRING,
    posdesc: Sequelize.STRING,
  
    Void: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    voidedAt: Sequelize.DATE,

},{
    tableName: 'posmaster'
})




module.exports = {
 _posmaster
 
}


_posmaster.sync({
   
    alter:false
}).catch(err => console.log(err))
