
const {
    _uommaster, _posmaster
    } = require('../models/posmaster')
    
    
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    module.exports.Getall = async function (req, res) {
     
    
        try {
            let response = await _posmaster.findAll()
            res.send(response);
            // console.log('res:s',response)
        } catch (err) {
            res.status(401).send({
                error: err.message
            })
        }
    }
    module.exports.Insertpos = async function (req, res) {
        let data = req.body;
        let length = 0;
        console.log('data:',data)
        try {
            let response = await _posmaster.findAll({
                where: {
                    [Op.or]: {
                        posdesc: data.posdesc
                    }
                }
            });
            length = response.length;
            if (length > 0) {
                res.send({
                    Boolval: false,
                    returnerror: "POS Description Already Exists"
                });
            } else {
    
                let resp = await _posmaster.create(data, {
                    fields: ['poscode', 'posdesc','Void','createdAt']
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