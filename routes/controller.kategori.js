const {
    queryAddKategori,
    queryGetAllKategori,
    queryGetKategoriById,
    queryGetKategoriByName,
    queryUpdateKategori,
    queryDeleteKategori
} = require('../db/query.kategori')

module.exports = {
    Add : (req, res)=>{
        res.render('addKategori')
    },
    Update : (req, res)=>{
        let id = req.params.id
        queryGetKategoriById(id, (err, result)=>{
            if(err){
                return err 
            }else{
                res.render('updateKategori', {
                    links : result
                })
            }
        })
    },
    AddKategori : (req, res)=>{
        let body = req.body
        let data = {
            type_name : body.type,
            status : "AKTIF"
        }
        queryAddKategori(data, (err, result)=>{
            if(err){
                return err 
            }else{
                res.redirect('type')
            }
        })
    },
    GetAllKategori : (req, res)=>{
        queryGetAllKategori((err, result)=>{
            if(err){
                return err
            }else{
                res.render('kategori', {
                    links : result
                })
            }
        })
    },
    // API u/ Android
    APIGetKategori : (req, res)=>{
        queryGetAllKategori((err, result)=>{
            if(err){
                return err
            }else{
                return res.json({
                        data: result
                    })
            }
        })
    },
    UpdateKategori : (req, res)=>{
        let body = req.body
        let data = {
            id : body.id,
            type : body.type
        }
        console.log(body.id)
        queryUpdateKategori(data, (err, result)=>{
            if(err){
                return err
            }else{
                res.redirect('../type')
            }
        })
    },
    DeleteKategori : (req, res)=>{
        let id = req.params.id
        let data = {
            id : id,
            status : "NON-AKTIF"
        }
        queryDeleteKategori(data, (err, result)=>{
            if(err){
                return err
            }else{
                res.redirect('../type')
            }
        })
        
    }
}