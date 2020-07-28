const {
    queryAddProduk,
    queryGetAllProduk,
    queryGetProdukById,
    queryGetProdukByName,
    queryUpdateProduk,
    queryDeleteProduk
} = require('../db/query.produk')

module.exports = {
    Addd : (req, res)=>{
        res.render('addProduk')
    },
    Updatee : (req, res)=>{
        let id = req.params.id
        queryGetProdukById(id, (err, result)=>{
            if(err){
                return err 
            }else{
                res.render('updateProduk', {
                    links : result
                })
            }
        })
    },
    AddProduk : (req, res)=>{
        let body = req.body

        let time = new Date()
        let tahun = time.getFullYear()
        let buan = time.getMonth()
        let tgl = time.getDate()

        let now = tahun +"-" + buan +"-" +tgl


        let data = {
            product_name : body.name,
            description : body.desc,
            stock : body.stok,
            price : body.harga,
            id_type : body.type,
            added_at : now,
            updated_at : now,
            status : "ADA"
        }
        queryAddProduk(data, (err, result)=>{
            if(err){
                return err 
            }else{
                res.redirect('item')
            }
        })
    },
    GetAllProduk : (req, res)=>{
        queryGetAllProduk((err, result)=>{
            if(err){
                return err
            }else{
                res.render('produk', {
                    links : result
                })
            }
        })
    },
    // API u/ Android
    APIGetProduk : (req, res)=>{
        queryGetAllProduk((err, result)=>{
            if(err){
                return err
            }else{
                return res.json({
                        data: result
                    })
            }
        })
    },
    UpdateProduk : (req, res)=>{
        let body = req.body

        let time = new Date()
        let tahun = time.getFullYear()
        let buan = time.getMonth()
        let tgl = time.getDate()

        let now = tahun +"-" + buan +"-" +tgl

        let data = {
            id : body.id,
            name : body.name,
            desc : body.desc,
            harga : body.harga,
            stok : body.stok,
            update : now,
            type : body.type,
            
        }
        queryUpdateProduk(data, (err, result)=>{
            if(err){
                return err
            }else{
                res.redirect('../item')
            }
        })
    },
    DeleteProduk : (req, res)=>{
        let id = req.params.id
        let data = {
            id : id,
            status : "DIHAPUS"
        }
        queryDeleteProduk(data, (err, result)=>{
            if(err){
                return err
            }else{
                res.redirect('../item')
            }
        })
        
    }
}