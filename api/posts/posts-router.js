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

router.get('/:id', async (req, res) => {
   try {
        const post = await Posts.findById(req.params.id)
        if (!post) {
            res.status(404).json({
                message: "The post with the specified ID does not exist" 
            })
        } else {
            res.json(post)
        }
    } catch (err) {
         console.log(err)
        res.status(500).json({
        message: "The post information could not be retrieved",
        err: err.message,
        stack: err.stack,
    })
   }
})

router.post('/', (req, res) => {
   
})

router.put('/', (req, res) => {
 
})

module.exports = router 