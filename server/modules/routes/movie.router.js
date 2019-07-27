const express = require('express');
const router = express.Router();
const pool = require('../pool')
// TODO - change me
// const characters = [];
// let nextId = 11;

// router.post('/', (req, res) => {
//     let newCharacter = req.body;
//     newCharacter.id = nextId++;
//     characters.push(newCharacter);
//     console.log('Added character', newCharacter);
//     console.log('We now have:', characters);
//     res.sendStatus(201);
// })

router.get('/info', (req, res) => {
    const sqlText = `select * from movies`;

    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting movies`, error);
            res.sendStatus(500)
        })
})

router.get(`/details/:id`, (req, res) => {

    let movieId = req.params.id;
    const sqlText =`select genres.name, movies.title, movies.description, movies.poster from movies_genres
join genres on genres.id = movies_genres.genre_id
join movies on movies.id = movies_genres.movie_id
where movie_id = $1;`;
    const values =[movieId]
    pool.query(sqlText, values)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting movies`, error);
            res.sendStatus(500)
        })
})

router.get('/show', (req, res) => {
    const sqlText = `select * from "show"`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting shows`, error);
            res.sendStatus(500)
        })

})

router.get('/tag', (req, res) => {
    const sqlText = `select * from "tag"`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting shows`, error);
            res.sendStatus(500)
        })

})

module.exports = router;