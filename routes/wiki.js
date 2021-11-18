const express = require("express");
const router = express.Router();
const {addPage} = require('../views');
const { Page } = require("../models");
//const addPage = require(''../view/addPage) does the same this as line 3

function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }


router.get('/', async (req, res, next) =>{
    res.redirect('/wiki');

});

router.post('/', async (req, res, next) =>{
    const newTitle = req.body.title;
    const newContent = req.body.content;
    try {
        const page = await Page.create({
            title: newTitle,
            content: newContent
        });

        // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
        res.redirect('/');
      } catch (error) { next(error) }
});

router.get('/add', (req, res) =>{
    res.send(addPage())
})

module.exports = router;
