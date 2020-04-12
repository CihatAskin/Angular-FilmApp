import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "movie 1", description: "Not Bad", imageUrl: "godFather.jpg" },
      { id: 2, name: "movie 2", description: "Not Bad", imageUrl: "backtothefuture.jpg" },
      { id: 3, name: "movie 3", description: "Not Bad", imageUrl: "godFather.jpg" },
      { id: 4, name: "movie 4", description: "Not Bad", imageUrl: "backtothefuture.jpg" },
      { id: 5, name: "movie 5", description: "Not Bad", imageUrl: "godFather.jpg" },
      { id: 6, name: "movie 6", description: "Not Bad", imageUrl: "backtothefuture.jpg" }

    ];
    return { movies };
  }
  constructor() { }
}
