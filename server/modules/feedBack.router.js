const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get('/', (req, res)=>{
    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText).then((result)=>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('Error handling GET for /feedback: ', error);
        res.sendStatus(404);
    });
});

router.post('/', (req, res)=>{
    const feedback = req.body;
    const queryText = `INSERT INTO feedback("feeling", "understanding", "support", "comments") 
    values ($1, $2, $3, $4)`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment]).then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error handling POST for /feedback: ', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res)=>{
    const queryText = 'delete from feedback where id = $1';
    pool.query(queryText, [req.params.id]).then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error handling DELETE for /feedback: ', error);
        res.sendStatus(500);
    });
});

module.exports = router;