class itemsMaster {
    constructor (itemdescription,uom,itemrate,itemtax,openitem,creationdate,Void,createdAt,updatedAt,voidedAt){
        
        this.itemdescription=itemdescription,
        this.uom =uom;
        this.itemrate =itemrate;
        this.itemtax = itemtax;
        this.openitem=openitem;
        this.creationdate =creationdate;
        this.Void = Void;
        this.createdAt=createdAt;
        this.updatedAt =updatedAt;
        this.voidedAt = voidedAt
    }

}
module.exports = itemsMaster;