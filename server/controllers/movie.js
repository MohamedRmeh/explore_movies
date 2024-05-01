import Movie from "../models/movies.js";
import multer from "multer";

// Create Movie
export const createMovie = async (req, res, next) => {
  const newMovie = new Movie({
    name: req.body.name,
    desc: req.body.desc,
    dotm: req.body.dotm,
    img: req.file.filename,
    categ: req.body.categ,
    userId: req.body.userId,
  });
  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    next(err);
  }
};

// get movie
export const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

// get all movies
export const getAllMovie = async (req, res, next) => {
  try {
    const limitNumber = 4;
    const allMoviesAction = await Movie.find({ categ: "action" }).sort({
      _id: -1,
    });
    const allMoviesDrama = await Movie.find({ categ: "drama" }).sort({
      _id: -1,
    });
    const allMoviesComedy = await Movie.find({ categ: "comedy" }).sort({
      _id: -1,
    });

    const action = await Movie.find({ categ: "action" })
      .sort({ _id: -1 })
      .limit(limitNumber);
    const drama = await Movie.find({ categ: "drama" })
      .sort({ _id: -1 })
      .limit(limitNumber);
    const comedy = await Movie.find({ categ: "comedy" })
      .sort({ _id: -1 })
      .limit(limitNumber);

    const movies = {
      action,
      drama,
      comedy,
      allMoviesAction,
      allMoviesDrama,
      allMoviesComedy,
    };

    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

// get random movie
export const exploreRandom = async (req, res, next) => {
  try {
    let count = await Movie.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let movie = await Movie.findOne().skip(random).exec();
    res.status(201).send(movie);
  } catch (err) {
    next(err);
  }
};

// Search Movie
export const searchMovie = async (req, res, next) => {
  try {
    let searchTerm = req.body.term;
    let movie = await Movie.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

// upload image to public folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "../client/public/Images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

export const upload = multer({ storage });
