import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPhotoFailure, loadPhotoSuccess, loadPhotos } from './photo.actions';
import { PicsumPhotosService } from 'src/app/services/picsum-photos/picsum-photos.service';

@Injectable()
export class PhotoEffects {
  constructor(
    private actions$: Actions,
    private photoService: PicsumPhotosService
  ) {}

  // Run this code when a loadPhotos action is dispatched
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() =>
        from(this.photoService.getPhotos()).pipe(
          tap(()=> { console.log('loading photos...')}),
          map((somePhotos) => somePhotos.map((photo) =>  { return {...photo, download_url:  photo.download_url.replace(/\/[^\/]*\/[^\/]*$/, '/200/300.webp')}})),
          // Take the returned value and return a new success action containing the photos
          map((somePhotos) => loadPhotoSuccess({ photos: somePhotos })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadPhotoFailure({ error })))
        )
      )
    )
  );

}
