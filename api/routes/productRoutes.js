import express from 'express'
import { Router as router } from 'express'
import products from '../data/product.js';

router.get('/', async (req,res) => {
    res.json(products);
});

router.get('/:id', (req,res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

export default router;