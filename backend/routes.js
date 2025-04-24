const express = require('express');
const router = express.Router();
const Orders = require("./dataSchema/orderScheme")
const WorkOrders = require("./dataSchema/workOrderScheme")
const Saftey = require("./dataSchema/safetyScheme")

router.get('/orders', async (req, res) => {
    const orders = await Orders.find();
    res.json(orders);
});

router.post('/orders', async (req, res) => {
    const newOrder = new Orders({ 
        name: req.body.name,
        amount: req.body.amount,
        supplier: req.body.supplier,
        status: req.body.status,
        delivery: req.body.delivery
     });
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  });
router.get('/work-orders', async (req, res) => {
    const workOrders = await WorkOrders.find();
    res.json(workOrders);
});
router.post('/work-orders', async (req, res) => {
    const newWorkOrder = new WorkOrders({ 
        name: req.body.name,
        title: req.body.title,
        status: req.body.status,
        description: req.body.description,
        category: req.body.category
     });
    const savedWorkOrder = await newWorkOrder.save();
    res.json(savedWorkOrder);
  });

    router.get('/safety', async (req, res) => {
        const safety = await Safety.find();
        res.json(safety);
    });

    router.post('/safety', async (req, res) => {
        const { question } = req.body;
        
        const newSafety = new Safety({ 
            username: req.body.username,
            userid: req.body.userid,
            phone: req.body.phone,
            questions: question,
        });
        const savedSafety = await newSafety.save();
        res.json(savedSafety);
    });

  module.exports = router