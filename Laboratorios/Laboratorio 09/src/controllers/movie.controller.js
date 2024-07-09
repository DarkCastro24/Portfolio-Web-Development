const httpError = require("http-errors");

const Movie = require("../models/movie.model");

const createMovie = async (req, res, next) => {
    try {
        const { body } = req;
        const newMovie = new Movie(body);
        const savedMovie = await newMovie.save();
        if (!savedMovie) throw httpError(500, "Movie not created");
        res.status(201).json({ message: "Movie created", data: savedMovie });
    } catch (error) {
        next(error);
    }
};

const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        if (!movies) throw httpError(404, "Movies not found");
        res.status(200).json({ data: movies });
    } catch (error) {
        next(error);
    }
};

const getOneMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (!movie) throw httpError(404, "Movie not found");
    } catch (error) {
        next(error);
    }
};

const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;

        const post = await Movie.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({error: "Post not found"});
        }

        return res.status(200).json({message: "Post deleted"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error'}); 
    }
};


const updateMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const toUpdateMovie = await Movie.findById(id);
        if (!toUpdateMovie) throw httpError(404, "Movie not found");
        const updatedMovie = await Movie.findByIdAndUpdate(id, body, {
            new: true,
        });
        if (!updatedMovie) throw httpError(500, "Movie not updated");
        res.status(200).json({ message: "Movie updated", data: updatedMovie });
    } catch (error) {
        next(error);
    }
};

const toggleMovieFavorite = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (!movie) throw httpError(404, "Movie not found");
        movie.favorite = !movie.favorite;
        const updatedMovie = await movie.save();
        if (!updatedMovie) throw httpError(500, "Movie not updated");
        res.status(200).json({ message: "Update favorite status", data: updatedMovie });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    deleteMovie,
    toggleMovieFavorite,
};
