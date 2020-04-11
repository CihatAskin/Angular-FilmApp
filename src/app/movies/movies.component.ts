import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})


export class MoviesComponent {
    title = 'Movies List';
    movies = Movies;



    // movie: Movie={id:1,name:'Movie Name'};
    // getTitle() {
    //     return this.title;
    // };
}