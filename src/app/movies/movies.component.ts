import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})


export class MoviesComponent {
    title = 'Movies List';
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();

    }
    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {//await
            this.movies = movies;
            });

    }
    // movie: Movie={id:1,name:'Movie Name'};
    // getTitle() {
    //     return this.title;
    // };
}