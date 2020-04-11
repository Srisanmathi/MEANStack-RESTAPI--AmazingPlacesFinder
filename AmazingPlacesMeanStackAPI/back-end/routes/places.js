//Express
const express = require('express');
const router = express.Router();


//mongoDB
const mongojs = require('mongojs');
const Place = require('../utilities/mongooseDB');
const db = mongojs("mongodb+srv://admin:admin@amazingplacesdatabase-cyh2v.azure.mongodb.net/test?retryWrites=true&w=majority",['places']);

/**
  * @swagger
  * definitions:
  *   Place:
  *     properties:
  *       name:
  *         type: string
  *       state:
  *         type: string
  *       country:
  *         type: string
  *       rating:
  *         type: number
  *   StoredPlace:
  *     properties:
  *       name:
  *         type: string
  *       state:
  *         type: string
  *       country:
  *         type: string
  *       rating:
  *         type: number
  *       _id:
  *         type: string
  *   Rating:
  *      properties:
  *        rating:
  *         type: string
  */


   /**
 * @swagger
 * /places:
 *   get:
 *     tags:
 *       - Places
 *     summary: List all places
 *     description: All places in the database
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of place Objects
 *       404:
 *         description: Not found
 *       500: 
 *         description: Problem communicating with db
 *         schema:
 *           $ref: '#/definitions/StoredPlace'
 */


//Get all places
router.get('/places',(req,res)=>{
    Place.find((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error retrieving all places");
        }
    })
})

/**
  * @swagger
  * /places/{id}:
  *   get:
  *     tags:
  *       - Places
  *     summary: Get a Place
  *     description: Get place by ID
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Place's Id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: A Single Place
  *       404:
  *         description: No Place with that Id
  *       500:
  *         description: Problem communicating with db
  *         schema:
  *           $ref: '#/definitions/StoredPlace'
  */

//Get Single Place
router.get('/places/:id',(req,res)=>{
    Place.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error retrieving the place");
        }
    })
})

/**
 * @swagger
 * /places:
 *   post:
 *     tags:
 *       - Places
 *     summary: Add New Place
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: place
 *         description: new place
 *         in: body
 *         title: title
 *         detail: detail
 *         schema:
 *           $ref: '#/definitions/Place'
 *         required: true
 *     responses:
 *       200:
 *         description: Place is added to the database
 *       500:
 *         description: Problem communicating with db
 */

//Save Place
router.post('/places',(req,res)=>{
    console.log("post is called =>",req.body)
    // let place = req.body;
    const place = new Place({
        name :req.body.name,
        state : req.body.state,
        country :req.body.country,
        rating :req.body.rating
    })
    place.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error saving to database");
        }
    })
})

/**
  * @swagger
  * /places/{id}:
  *   delete:
  *     tags:
  *       - Places
  *     summary: Delete a place
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Place Id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Place Deleted Successfully
  *       404:
  *         description: No Place in db with that Id
  *       500:
  *         description: Problem communicating with db
  */

//Delete Place
router.delete('/places/:id',(req,res)=>{
    console.log("Delete called=>",req.params.id);
    Place.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error deleting the place");
        }
    })
    
})

/**
  * @swagger
  * /places/{id}:
  *   put:
  *     tags:
  *       - Places
  *     name: Update a place Profile
  *     summary: Edit a place
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Place Id
  *         in: path
  *         required: true
  *         type: string
  *       - name: Place
  *         in: body
  *         description: Fields for the place resource
  *         schema:
  *           $ref: '#/definitions/Place'
  *     responses:
  *       200:
  *         description: Place Updated Successfully
  *       404:
  *         description: No Place in db with that Id
  *       500:
  *         description: Problem communicating with db
  */

router.put('/places/:id',(req,res)=>{
    let place = {
        name : req.body.name,
        state : req.body.state,
        country : req.body.country,
        rating : req.body.rating
    }
    Place.findByIdAndUpdate(req.params.id, { $set : place }, {new:true},(err,doc)=>{
        if(!err){
            res.send(doc);    
        }
        else{
            console.log("error updating");
        }
    })
})

/**
  * @swagger
  * /places/{id}:
  *   patch:
  *     tags:
  *       - Places
  *     name: Update a place Profile
  *     summary: Edit a place
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         description: Place Id
  *         in: path
  *         required: true
  *         type: string
  *       - name: Place
  *         in: body
  *         description: Fields for the place resource
  *         schema:
  *           $ref: '#/definitions/Rating'
  *     responses:
  *       200:
  *         description: Place Updated Successfully
  *       404:
  *         description: No Place in db with that Id
  *       500:
  *         description: Problem communicating with db
  */

router.patch('/places/:id',(req,res)=>{
    let p;
    console.log("id",req.params.id);
    console.log("id",req.body);
    Place.findById(req.params.id,(err,doc)=>{
        if(!err){
            console.log(doc);
            doc.rating = req.body.rating;
            doc.save((err,d)=>{
                if(!err){
                    res.send(doc);    
                }
            })
        }
    })

})
module.exports = router;