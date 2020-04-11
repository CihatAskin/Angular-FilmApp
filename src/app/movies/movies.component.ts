import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Movie } from '../movie';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})


export class MoviesComponent {
    title = 'Movies List';
    movies = Movies;
    selectedMovie: Movie;

    onSelect(movie: Movie): void {        
        this.selectedMovie = movie;
    }

    // movie: Movie={id:1,name:'Movie Name'};
    // getTitle() {
    //     return this.title;
    // };
}