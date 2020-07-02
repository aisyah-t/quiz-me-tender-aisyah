const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/questions', (req, res) => {
    request
        .get('https://opentdb.com/api_category.php')
        .end((err, result) => {
            if (err) {
                res.status(500).send(err.message)
            } else {
                const categories = result.body.trivia_categories
                const randomIndex = Math.floor(Math.random() * Math.floor(categories.length))
                const randomCategoryId = categories[randomIndex].id
                request.get(`https://opentdb.com/api.php?amount=5&category=${randomCategoryId}&difficulty=medium&type=multiple`)
                    .end((err, result) => {
                        if (err) {
                            res.status(500).send(err.message)
                        } else {
                            // console.log(result.body.results)
                            res.send(result.body.results)
                        }
                    })
            }
        })
})

// .then(res => {
//     return randomCategoryId
// }).then(randomCategoryId => {
//     request.get(`https://opentdb.com/api.php?amount=5&category=${randomCategoryId}&difficulty=medium&type=multiple`)
//         .then(res => {
//             return res.body
//         })
// })
module.exports = router