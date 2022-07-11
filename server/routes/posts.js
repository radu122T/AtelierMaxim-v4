const express = require('express')
const router =express.Router()
const Post = require ('../models/Post')



router.post('/', async (req,res) => {
    console.log(req.body)
    const post = new Post ( {
        
        shippingNume : req.body.dataShipping.values.nume,
        shippingPrenume : req.body.dataShipping.values.prenume,
        shippingEmail : req.body.dataShipping.values.email,
        shippingTelefon : req.body.dataShipping.values.telefon,
        shippingAdresa : req.body.dataShipping.values.adresa,
        shippingLocalitate : req.body.dataShipping.values.localitate,
        shippingJudet : req.body.dataShipping.values.judet,
        shippingCod : req.body.dataShipping.values.codPostal,
        paymentNume : req.body.dataPayment.values.nume,
        paymentPrenume : req.body.dataPayment.values.prenume,
        paymentAdresa : req.body.dataPayment.values.adresa,
        paymentLocalitate:req.body.dataPayment.values.localitate,
        paymentJudet:req.body.dataPayment.values.judet,
        paymentCod:req.body.dataPayment.values.codPostal,
    })
    
    try {
        const savedPost = await post.save()
        return res.json(savedPost)
    }
    catch(err) {
        res.json({message : err})
    }
    res.json({
        status:'success'
    })
})



module.exports = router