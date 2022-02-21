import express from 'express';
import controller from './controllers/moviesController.js';
import datamovie from "./share/data-movies.js";

const app = express();
app.use(express.json());




app.get('/movies', (req, res)=>{
    const movies = controller.getAllMovies(datamovie);    
    res.send(datamovie.res);
})


app.get('/movies/:id', (req, res)=>{
    datamovie.req= { id:req.params.id}; 
    controller.getMovieById(datamovie);    
    res.send(datamovie.res);
})

app.delete('/movies/remove/:id', (req, res)=>{

    datamovie.req={id:req.params.id};
    controller.removeMovie(datamovie);
    res.send(datamovie.res);

})






export default app