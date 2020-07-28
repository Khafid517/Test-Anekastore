const db = require('./connection')

module.exports = {
    queryAddKategori : (data, callBack)=>{
        db.query(
            "INSERT INTO kategori SET ?",
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
    queryGetAllKategori : (callBack)=>{
        db.query(
            "SELECT * FROM kategori WHERE status = 'AKTIF'",
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
    queryGetKategoriById : (data, callBack)=>{
        db.query(
            "SELECT * FROM kategori WHERE id_type = ?",
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
    queryGetKategoriByName : (data, callBack)=>{
        db.query(
            "SELECT * FROM kategori WHERE type_name = ?",
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
    queryUpdateKategori : (data, callBack)=>{
        console.log(data.id)
        db.query(
            "UPDATE kategori SET type_name = ? WHERE id_type = ?",
            [
                data.type,
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
    queryDeleteKategori : (data, callBack)=>{
        db.query(
            "UPDATE kategori SET status = ? WHERE id_type = ?",
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