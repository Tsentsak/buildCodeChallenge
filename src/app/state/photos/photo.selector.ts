import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PhotoState } from 'src/app/models/photo.model';

export const selectPhotos = (state: AppState) => state.photos;
export const selectAllPhotos = createSelector(
  selectPhotos,
  (state: PhotoState) => state.photos
);
