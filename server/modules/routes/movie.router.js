const express = require('express');
const router = express.Router();
const pool = require('../pool')

// get all movies
router.get('/info', (req, res) => {
    const sqlText = `select * from movies order by id`;

    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting movies`, error);
            res.sendStatus(500)
        })
})

//Get deatails of movie clicked on target movie id
router.get(`/details/:id`, (req, res) => {

    let movieId = req.params.id;
    const sqlText =`select movie_id, genres.name, movies.title, movies.description, movies.poster from movies_genres
join genres on genres.id = movies_genres.genre_id
join movies on movies.id = movies_genres.movie_id
where movie_id = $1;`;
    const values =[movieId]
    pool.query(sqlText, values)
        .then((response) => {
            res.send(response.rows[0])
        })
        .catch((error) => {
            console.log(`error getting movie details`, error);
            res.sendStatus(500)
        })
})

//edit movie description by targeting id
router.put(`/edit/:id`, (req, res) => {
    console.log(req.body)
    const sqlText = `update movies set description = $1, title = $2 where id = $3;`;
    const values = [req.body.description, req.body.title, req.body.movie_id]
    pool.query(sqlText, values)
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(`error editing movies`, error);
            res.sendStatus(500)
        })
})



module.exports = router;