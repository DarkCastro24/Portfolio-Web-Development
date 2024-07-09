const express = require("express");
const router = express.Router();

const {
    createMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    toggleMovieFavorite,
    deleteMovie
} = require("../controllers/movie.controller");

const {
    idInParams,
    createMovieValidator,
    updateMovieValidator,
} = require("../validator/movie.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createMovieValidator, runValidation, createMovie);
router.get("/", getMovies);
router.get("/:id", idInParams, runValidation, getOneMovie);
router.delete("/:id", idInParams, runValidation, deleteMovie);
router.put("/:id", idInParams, updateMovieValidator, runValidation, updateMovie);
router.patch("/favorite/:id", idInParams, runValidation, toggleMovieFavorite);

module.exports = router;