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

// Manajemen 
// 1. Kategori 

/**
 * @swagger
 * definitions:
 *  Kategori:
 *    properties:
 *      id_type:
 *        type: integer
 *      type_name:
 *        type: string
 *      status:
 *        type: string
 *        enum: 
 *        - AKTIF
 *        - NON-AKTIF
 */

/**
 * @swagger
 * /type:
 *  get:
 *    tags: 
 *      - Kategori
 *    description: api menampilkan semua kategori
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: status
 *        in: query
 *        description: sebagai filter
 *        required: true
 *        type: array
 *        items:
 *          type: string
 *          enum: 
 *          - AKTIF
 *          - NON-AKTIF
 *          default: AKTIF
 *    responses:
 *      '200':
 *        description: menampilkan array kategori
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Kategori'
 */
router.get('/type', GetAllKategori)

/**
 * @swagger
 * /addType:
 *  post:
 *    tags: 
 *      - Kategori
 *    description: api menambahkan kategori
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: kategori
 *        in: body
 *        description: objek kategori
 *        required: true
 *        type: array
 *        schema:
 *          $ref: '#/definitions/Kategori'
 *    responses:
 *      '200':
 *        description: sukses menambahkan kategori
 */
router.post('/addType', AddKategori)
router.get('/addType', Add)

/**
 * @swagger
 * /editType/{id}:
 *  put:
 *    tags: 
 *      - Kategori
 *    description: api mengubah kategori
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id kategori untuk mengubah
 *        required: true
 *      - name: kategori
 *        in: body
 *        description: objek kategori
 *        required: true
 *        type: array
 *        schema:
 *          $ref: '#/definitions/Kategori'
 *    responses:
 *      '200':
 *        description: sukses mengubah kategori
 */
router.get('/editType/:id', Update)
router.post('/editType', UpdateKategori)

/**
 * @swagger
 * /deleteType/{id}:
 *  delete:
 *    tags: 
 *      - Kategori
 *    description: api menghapus kategori
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id kategori untuk menghapus
 *        required: true
 *    responses:
 *      '200':
 *        description: sukses menghapus kategori
 */
router.get('/deleteType/:id', DeleteKategori)

// 2. Produk

/**
 * @swagger
 * definitions:
 *  Produk:
 *    properties:
 *      id_product:
 *        type: integer
 *      product_name:
 *        type: string
 *      description:
 *        type: string 
 *      sock:
 *        type: integer
 *      price:
 *        type: integer
 *      id_type:
 *        $ref: '#/definitions/Kategori'
 *      added_at:
 *        type: string
 *        format: date-time
 *      updated_at:
 *        type: string
 *        format: date-time
 *      status:
 *        type: string
 *        enum: 
 *        - ADA
 *        - DIHAPUS
 *        default: ADA
 */

/**
 * @swagger
 * /item:
 *  get:
 *    tags: 
 *      - Produk
 *    description: api menampilkan semua produk
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: status
 *        in: query
 *        description: sebagai filter
 *        required: true
 *        type: array
 *        items:
 *          type: string
 *          enum: 
 *          - ADA
 *          - DIHAPUS
 *          default: ADA
 *    responses:
 *      '200':
 *        description: respon sukses
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Produk'
 */
router.get('/item', GetAllProduk)

/**
 * @swagger
 * /addItem:
 *  post:
 *    tags: 
 *      - Produk
 *    description: api menambahkan produk
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: produk
 *        in: body
 *        description: objek produk
 *        required: true
 *        type: array
 *        schema:
 *          $ref: '#/definitions/Produk'
 *    responses:
 *      '200':
 *        description: sukses menambahkan produk
 */
router.post('/addItem', AddProduk)
router.get('/addItem', Addd)

/**
 * @swagger
 * /editIten/{id}:
 *  put:
 *    tags: 
 *      - Produk
 *    description: api mengubah produk
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id produk untuk mengubah
 *        required: true
 *      - name: produk
 *        in: body
 *        description: objek produk
 *        required: true
 *        type: array
 *        schema:
 *          $ref: '#/definitions/Produk'
 *    responses:
 *      '200':
 *        description: sukses mengubah produk
 */
router.get('/editItem/:id', Updatee)
router.post('/editItem', UpdateProduk)

/**
 * @swagger
 * /deleteItem/{id}:
 *  delete:
 *    tags: 
 *      - Produk
 *    description: api menghapus produk
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id produk untuk menghapus
 *        required: true
 *    responses:
 *      '200':
 *        description: sukses menghapus produk
 */
router.get('/deleteItem/:id', DeleteProduk)

//API Android

/**
 * @swagger
 * /kategori:
 *  get:
 *    tags: 
 *      - API Android
 *    description: api menampilkan semua kategori untuk Android
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: status
 *        in: query
 *        description: sebagai filter
 *        required: true
 *        type: array
 *        items:
 *          type: string
 *          enum: 
 *          - AKTIF
 *          - NON-AKTIF
 *          default: AKTIF
 *    responses:
 *      '200':
 *        description: menampilkan array kategori
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Kategori'
 */
router.get('/kategori', APIGetKategori)

/**
 * @swagger
 * /produk:
 *  get:
 *    tags: 
 *      - API Android
 *    description: api menampilkan semua produk untuk Android
 *    produces: 
 *      - application/json
 *    parameters:
 *      - name: status
 *        in: query
 *        description: sebagai filter
 *        required: true
 *        type: array
 *        items:
 *          type: string
 *          enum: 
 *          - ADA
 *          - DIHAPUS
 *          default: ADA
 *    responses:
 *      '200':
 *        description: respon sukses
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Produk'
 */
router.get('/produk', APIGetProduk)

module.exports = router