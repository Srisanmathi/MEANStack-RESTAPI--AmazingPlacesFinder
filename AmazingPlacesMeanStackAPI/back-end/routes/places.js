//Express
const express = require('express');
const router = express.Router();

//mongoDB
const mongojs = require('mongojs');
const Place = require('./mongooseDB');
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
  */

   /**
   * @swagger
   * definitions:
   *   affectedResponse:
   *     properties:
   *       fieldCount:
   *         type: integer
   *       affectedRows:
   *         type: integer
   *       insertId:
   *         type: integer
   *       serverStatus:
   *         type: integer
   *       warningCount:
   *         type: integer
   *       message:
   *         type: string
   *       protocol41:
   *         type: boolean
   *       changedRows:
   *         type: integer
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
    console.log("get all places called")
    db.places.find((err, places)=>{
        if(err){
            res.send(err)
        }
        res.json(places);
    });
})

//Get Single Place
router.get('/places/:id',(req,res)=>{
    console.log("get single place called")
    db.places.findOne({_id : mongojs.ObjectId(req.params.id)},(err, place)=>{
        if(err){
            res.send(err)
        }
        res.json(place);
    });
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
 *       - name: body
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
    let place = req.body;
        db.places.save(place,(err,place)=>{
            if(err){
                res.send(err)
            }
            res.json(place);
        });
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
    db.places.remove({_id : mongojs.ObjectId(req.params.id)},(err, place)=>{
        if(err){
            res.send(err)
        }
        res.json(place);
    });
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
  *       - name: body
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


module.exports = router;