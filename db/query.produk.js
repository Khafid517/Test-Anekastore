const db = require('./connection')

module.exports = {
    queryAddProduk : (data, callBack)=>{
        db.query(
            "INSERT INTO produk SET ?",
            data,
            (err, result, fields)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }
            }
        )
    },
    queryGetAllProduk : (callBack)=>{
        db.query(
            "SELECT * FROM produk WHERE status = 'ADA'",
            [],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }
            }
        )
    },
    queryGetProdukById : (data, callBack)=>{
        db.query(
            "SELECT * FROM produk WHERE id_product = ?",
            data,
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,result)
                }
            }
        )
    },
    queryGetProdukByName : (data, callBack)=>{
        db.query(
            "SELECT * FROM produk WHERE product_name = ?",
            data,
            [],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,result)
                }
            }
        )
    },
    queryUpdateProduk : (data, callBack)=>{
        console.log(data.id)
        db.query(
            "UPDATE produk SET product_name = ?, description = ?, stock = ?, price = ?, id_type = ?, updated_at = ?  WHERE id_product = ?",
            [
                data.name,
                data.desc,
                data.stok,
                data.harga,
                data.type,
                data.update,
                data.id
            ],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,result)
                }
            }
        )
    },
    queryDeleteProduk : (data, callBack)=>{
        db.query(
            "UPDATE produk SET status = ? WHERE id_product = ?",
            [   
                data.status,
                data.id
            ],
            (err, result)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }
            }
        )
    }
}