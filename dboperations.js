var config = require('./dbconfig');
const sql = require('mssql')

async function getitemmaster(){
    try{
        let pool = await  sql.connect(config)
        let  food = await  pool.request().query("SELECT * from itemsMaster");
        return food.recordsets
    }
    catch (error){
       console.log(error)
    }
}

async function getitemmasterid(oid) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.NVarChar, oid)
            .query("SELECT * from itemsMaster where itemdescription = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}





async function additem(item) {

    try {
        let pool = await sql.connect(config);
        let insertitem = await pool.request()
           
            .input('itemdescription', sql.NVarChar, item.itemdescription)
            .input('uom', sql.NVarChar, item.uom)
            .input('itemrate', sql.Int, item.itemrate)
            .input('itemtax', sql.Decimal(18,1), item.itemtax)
            .input('openitem',sql.NVarChar,item.openitem)
            .input('creationdate',sql.Date,item.creationdate)
            .input('Void',sql.NVarChar,item.Void)
            .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('item_master');
            console.log('re:',insertitem);
        return 'true';
    }
    catch (err) {
        console.log(err);
    }

}

async function updateitem(item) {

    try {
        let pool = await sql.connect(config);
        let upitem = await pool.request()
           
            .input('itemdescription', sql.NVarChar, item.itemdescription)
            .input('uom', sql.NVarChar, item.uom)
            .input('itemrate', sql.Int, item.itemrate)
            .input('itemtax', sql.Decimal(18,1), item.itemtax)
            .input('openitem',sql.NVarChar,item.openitem)
            .input('creationdate',sql.Date,item.creationdate)
            .input('Void',sql.NVarChar,item.Void)
            // .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('updateitemmaster');
            console.log('re:',upitem);
            return 'true';
            

    }
    catch (err) {
        console.log(err);
    }

}



async function deleteitem(item) {

    try {
        let pool = await sql.connect(config);
        let detitem = await pool.request()
           
            .input('itemdescription', sql.NVarChar, item.itemdescription)
            .input('Void',sql.NVarChar,item.Void)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('deletemaseter');
            console.log('re:',detitem);
            return 'true';
    }
    catch (err) {
        console.log(err);
    }

}



async function  uomasterid(){
    try{
        let pool = await  sql.connect(config)
        let  food = await  pool.request().query("SELECT * from uommaster");
        return food.recordsets
    }
    catch (error){
       console.log(error)
    }
}


async function additem(item) {

    try {
        let pool = await sql.connect(config);
        let insertitem = await pool.request()
           
            .input('itemdescription', sql.NVarChar, item.itemdescription)
            .input('uom', sql.NVarChar, item.uom)
            .input('itemrate', sql.Int, item.itemrate)
            .input('itemtax', sql.Decimal(18,1), item.itemtax)
            .input('openitem',sql.NVarChar,item.openitem)
            .input('creationdate',sql.Date,item.creationdate)
            .input('Void',sql.NVarChar,item.Void)
            .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('item_master');
            console.log('re:',insertitem);
        return 'true';
    }
    catch (err) {
        console.log(err);
    }

}

async function adduomitem(item) {

    try {
        let pool = await sql.connect(config);
        let uomitem = await pool.request()
           
           
            .input('uomdesc', sql.NVarChar, item.uomdesc)
            .input('uomcode', sql.NVarChar, item.uomcode)
            .input('Void',sql.NVarChar,item.Void)
            .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('ADDUOM');
            console.log('re:',uomitem);
            return 'true';
            

    }
    catch (err) {
        console.log(err);
    }

}

async function getposmodule(){
    try{
        let pool = await  sql.connect(config)
        let  food = await  pool.request().query("SELECT * from posmaster");
        return food.recordsets
    }
    catch (error){
       console.log(error)
    }
}

async function addposmodule(item) {

    try {
        let pool = await sql.connect(config);
        let positem = await pool.request()
           
           
            .input('poscode', sql.NVarChar, item.poscode)
            .input('posdesc', sql.NVarChar, item.posdesc)
            .input('Void',sql.NVarChar,item.Void)
            .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('addposmodule');
            console.log('re:',positem);
            return 'true';
            

    }
    catch (err) {
        console.log(err);
    }

}


async function itemmasterrate(item) {

    try {
        let pool = await sql.connect(config);
        let itemrate = await pool.request()
            .input('itemcode', sql.NVarChar, item.poscode)
            .input('Rate', sql.Int, item.Rate)
            .input('uom', sql.NVarChar, item.uom)
            .input('poscode', sql.NVarChar, item.posdesc)
            .input('Void',sql.NVarChar,item.Void)
            .input('createdAt',sql.DateTime,item.createAt)
            .input('updatedAt',sql.DateTime,item.updatedAt)
            .input('voidedAt',sql.DateTime,item.voidedAt)
            .execute('addmasterrate');
            console.log('re:',itemrate);
            return 'true';
            

    }
    catch (err) {
        console.log(err);
    }

}


module.exports={
    getitemmaster:getitemmaster,
    getitemmasterid:getitemmasterid,
    additem:additem,
    updateitem:updateitem,
    deleteitem:deleteitem,
    uomasterid:uomasterid,
    adduomitem:adduomitem,
    getposmodule:getposmodule,
    addposmodule:addposmodule,
    itemmasterrate:itemmasterrate
}