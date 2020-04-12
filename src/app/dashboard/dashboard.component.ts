import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  moviesLength :number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getmovies();
  }

  getmovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies.slice(0, 5);
        this.moviesLength=movies.length;
      });
  }
}
