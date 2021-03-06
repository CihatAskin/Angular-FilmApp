import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';//async await
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingServise: LoggingService) { }

  getMovies(): Observable<Movie[]> {
    this.loggingServise.add('MovieService: listing movies');
    return of(Movies);
  }
  getMovie(id): Observable<Movie> {
    this.loggingServise.add('MovieService: movie detail by id=' + id);
    return of(Movies.find(movie => movie.id == id));
  }
}
