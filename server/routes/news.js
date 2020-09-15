const express = require('express');
const router = express.Router();

// MODELS
const {News} = require('../models/news');
const {auth} = require('../middleware/auth');

router.route('/news')
.get((req, res)=>{
    let id = req.query.id;

    // Request with chaining
    News.find({_id: id})
    .populate('ownerId', 'name lastname')
    .exec((err, doc)=>{
        if(err) return res.status(400).send(err);
        res.send(...doc)
    })
})
.post(auth, (req, res)=>{
    const news = new News({
        ...req.body,
        ownerId: req.user._id
    });
    news.save((err, doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            newsId: doc._id
        })
    })
})
.patch(auth, (req, res)=>{
    News.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json({
            success: true,
            doc
        })
    })
})
.delete(auth, (req, res)=>{
    let id = req.query.id;
    News.findByIdAndRemove(id, (err, doc)=>{
        if(err) return res.status(400).send(err)
        res.json({
            success: true,
            doc
        })
    })
});

router.route('/newslist')
.get((req,res)=>{
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;
    let limit = req.query.limit ? parseInt(req.query.limit) : 2;
    let order = req.query.order ? req.query.order : 'asc';
    let byOwner = req.query.owner ? {ownerId: req.query.owner } : {}
    
    News.find(byOwner).skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc)
    });

})

module.exports = router;