const express = require('express');
const router = express.Router();

const Data_client_form = require('../model/Data_client_form');


// Router url bring
router.get('/', async (req, res) => {
    const Datas_client_form = await Data_client_form.find();
    res.json(Datas_client_form);
});

// Router url submit
router.post('/', async (req, res) => {
    const Data_client_form = new Data_client_form(req.body);
    await Data_client_form.save();
    res.json({
        status: 'Date client save!'
    });
});

// Router url update
router.put('/:id', async (req, res) => {
    await Data_client_form.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Date client update!'
    })
});


// Router url delete
router.delete('/:id', async (req, res) => {
    await Data_client_form.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Date client delete'
    });
});

module.exports = router;