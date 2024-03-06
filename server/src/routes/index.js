const express = require('express');
const router = express.Router();

const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const postUser = require('../controllers/postUser')

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.post('/register',postUser);


module.exports = router;
