import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';//async await
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMovieUrl = 'api/movies';

  constructor(private loggingServise: LoggingService, private client: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    this.loggingServise.add('MovieService: listing movies');
    return this.client.get<Movie[]>(this.apiMovieUrl);
  }
  getMovie(id): Observable<Movie> {
    this.loggingServise.add('MovieService: movie detail by id=' + id);
    return this.client.get<Movie>(this.apiMovieUrl + '/' + id);
  }
}
