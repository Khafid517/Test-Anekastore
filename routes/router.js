const {
    APIGetKategori,
    Add,
    Update,
    AddKategori,
    GetAllKategori,
    UpdateKategori,
    DeleteKategori
} = require('./controller.kategori')

const {
    APIGetProduk,
    Addd,
    Updatee,
    AddProduk,
    GetAllProduk,
    UpdateProduk,
    DeleteProduk
} = require('./controller.produk')

const router = require("express").Router()

//API Android
router.get('/kategori', APIGetKategori)
router.get('/produk', APIGetProduk)

//Manajemen 

// 1. Kategori 
router.get('/type', GetAllKategori)
router.get('/addType', Add)
router.post('/addType', AddKategori)
router.get('/deleteType/:id', DeleteKategori)
router.get('/editType/:id', Update)
router.post('/editType', UpdateKategori)

// 2. Produk
router.get('/item', GetAllProduk)
router.get('/addItem', Addd)
router.post('/addItem', AddProduk)
router.get('/deleteItem/:id', DeleteProduk)
router.get('/editItem/:id', Updatee)
router.post('/editItem', UpdateProduk)

module.exports = router