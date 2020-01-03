'use strict'

const express = require('express');
const router = express.Router();
const Contact = require('../controllers/contact')

router.get('/contact', Contact.readAll)
router.get('/contact/:id', Contact.readOne)
router.post('/contact', Contact.create)
router.put('/contact/:id', Contact.update)
router.delete('/contact/:id', Contact.delete) 