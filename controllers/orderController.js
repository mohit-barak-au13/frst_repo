const express = require('express');
const mongoose = require('mongoose');
// const Order= mongoose.model('Order');
const Order = require('../models/order.model')
const db = require('../models/db')

var router = express.Router();
mongoose.set('useFindAndModify',false);


//router
router.get('/',(req,res)=>{
    res.render('menu')
});

router.get('/cart',(req,res)=>{
    res.render('cart')
})

router.get('/orders',(req,res)=>{
    res.render('orders')
})

router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        if (!err) {
            res.render("admin",{
                order:docs
            })
        } else {
            console.log('Error in Order : '+ err)
        }
    })
});

router.get("/order/:id",(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
            res.render("orders",{order:doc})
        } else {
            console.log('Error in FindbyId : '+ err)
        }

    })
})

router.get("/order/delete/:id",(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) {
            res.redirect('/admin')
        } else {
            console.log('Error in delete : '+ err)
        }
    })
})

//post

router.post('/cart',(req,res)=>{
    insertOdrder(req,res);
})

router.post('/order',(req,res)=>{
    updateOrder(req,res)
})

//  Functions
function updateOrder(req,res){
    Order.findByIdAndUpdate({id:req.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
                    res.redirect('/admin')
        } else {
            console.log('Error in Update : '+ err)
        }
    });
}

function insertOdrder(req,res){
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter +=1;
    var order = new Order();
    order.total = req.body.total;
    order.order = counter;
    order.save((err,docs)=>{
        if (!err) {
            console.log('order'+order);
            res.redirect('/admin')
        } else {
            console.log('Error in InsertOdrder :'+err)
        }
    })
}

module.exports = router;

