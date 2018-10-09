var express = require('express');
var mongoose = require('mongoose');
var stripe1 = require('../models/stripe');
var f = mongoose.model("stripe");
var router = express.Router();


router.post('/stripepay', function (req, res) {
   
        let Stripes = new stripe1({
            exp_month: req.body.result.token.card.exp_month,
            exp_year: req.body.result.token.card.exp_year,
            card_id: req.body.result.token.card.id,
            cardnumber: req.body.result.token.card.last4,
            name:req.body.result.token.card.name,
            token_id:req.body.result.token.id,
             clientip:req.body.result.token.client_ip
        })
    
        Stripes.save(function (err, data) {
            if (err) {
                return res.json({ error: true });
            }
            res.json({ error: false });
        })
     });
     module.exports=router;