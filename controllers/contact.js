'use strict'

const Model = require('../models');
const Contact = Model.Contact;

class ContactController {
    static create(req, res){
        Contact.create({
            name: 'nafies',
            phone: '082134567890'
        })
            .then(data=>{
                res.status(201).json(data)
            })
            .catch(err=>{
                res.status(500).json(data)
            })
    }

    static readAll(req, res){
        Contact.findAll()
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(data)
            })
    }

    static readOne(req, res){
        Contact.findOne(id : req.params.id)
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(data)
            })
    }

    static update(req, res){
        Contact.update({
            name: 'nafies',
            phone: '082134567890'
        }, where: {
            id: req.params.id
        })
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(data)
            })
    }

    static delete(req, res){
        Contact.destroy({
            where: {
                id:req.params.id
            }
        })
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(data)
            })
    }
}

module.exports = ContactController