let router = require("express").Router();
let Client = require ('../models/clientModel')

router.get('/clients', (req, res)=>{
    Client.find({}).exec(function(err, clients){
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(clients)
        }
    })
});

router.get('/actions', (req, res)=>{ //בקשת GET
    //לשרת, בעזרת הפרמטרים 
    Client.find({},'name owner emailType sold _id firstContact').exec(function(err, actions){
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(actions)
        }
    })
});

router.get('/analytics', (req, res)=>{
    Client.find({}).exec(function(err, analytics){
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(analytics)
        }
    })
});

router.post('/clients/:id', (req, res)=>{
    let id = req.params.id
    Client.findOneAndUpdate({_id: id},{$set:{owner: req.body.owner}} ).exec(function(err, client){
        if(err){
            res.status(500).send(err)
        }
        else{   
            res.send(client)
        }
    })
})

router.post('/clientsEmail/:id', (req, res)=>{
    let idEmail = req.params.id
    Client.findOneAndUpdate({_id: idEmail},{$set:{emailType: req.body.emailType}} ).exec(function(err, client){
        if(err){
            res.status(500).send(err)
        }
        else{   
            res.send(client)
        }
    })
})

router.post('/clientsSold/:id', (req, res)=>{
    let idSold = req.params.id
    Client.findOneAndUpdate({_id: idSold},{$set:{sold: req.body.sold}}).exec(function(err, client){
        if(err){
            res.status(500).send(err)
        }
        else{   
            res.send(client)
        }
    })
});

router.post('/clientsAdd', (req, res)=>{
    let newc = new Client({firstContact: new Date(), name: req.body.name, country:req.body.country, owner:req.body.owner})
    newc.save(function(err, client){
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(client)
        }
    })
})

module.exports = router;