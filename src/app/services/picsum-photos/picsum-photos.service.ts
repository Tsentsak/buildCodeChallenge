import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicsumPhotosService {

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Array<Photo>> {
     return this.http
      .get<Photo[]>(
        'https://picsum.photos/v2/list'
      )
      .pipe(map((photos) => photos || []));
  }
}
