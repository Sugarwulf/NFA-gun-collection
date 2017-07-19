import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();

//create and update gun
router.post('/', (req, res) => {
  let gun = req.body;
  gun._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('guns').save(gun).then(() => {
    res.end();
  })
})

//get guns
router.get('/', (req, res) => {
  database.db.collection('guns').find().toArray().then((guns) => {
    res.json(guns);
  })
})

//delete gun
router.delete('/:id', (req, res) => {
  let gunId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('guns').remove({_id: gunId}).then(() =>{
    res.end();
    // res.sendStatus(200);
  // }).catch((err) => {
  //   res.status(500);
  //   console.log(err);
  })
});

export default router;
