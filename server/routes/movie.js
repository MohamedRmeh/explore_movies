import {createMovie, getMovie, getAllMovie, exploreRandom, searchMovie} from '../controllers/movie.js';
import express from 'express';
import { upload } from '../controllers/movie.js';
const router = express.Router();

router.post('/submit', upload.single('img'), createMovie);
router.get('/movie/:id', getMovie);
router.get('/movies', getAllMovie);
router.get('/random-movie', exploreRandom);
router.post('/search', searchMovie);

export default router;