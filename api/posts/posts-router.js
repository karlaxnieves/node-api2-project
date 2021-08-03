// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')

const router = express.Router()

router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts)
    })    
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack,  
        })
    })
})

router.get('/', (req, res) => {
   
})

router.post('/', (req, res) => {
   
})

router.put('/', (req, res) => {
 
})

module.exports = router 