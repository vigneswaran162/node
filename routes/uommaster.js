
const {
_uommaster
} = require('../models/uommaster')


const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports.Getall = async function (req, res) {
 

    try {
        let response = await _uommaster.findAll()
        res.send(response);
        // console.log('res:s',response)
    } catch (err) {
        res.status(401).send({
            error: err.message
        })
    }
}
module.exports.Insertuom = async function (req, res) {
    let data = req.body;
    let length = 0;
    console.log('data:',data)
    try {
        let response = await _uommaster.findAll({
            where: {
                [Op.or]: {
                    uomdesc: data.uomdesc
                }
            }
        });
        length = response.length;
        if (length > 0) {
            res.send({
                Boolval: false,
                returnerror: "UOM Description Already Exists"
            });
        } else {

            let resp = await _uommaster.create(data, {
                fields: ['uomcode', 'uomdesc','Void','createdAt']
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
            returnerror: err.message,
          
        });
    }
}