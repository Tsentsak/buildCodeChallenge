import { createAction, props } from '@ngrx/store';
import { Photo } from 'src/app/models/photo.model';

export const addPhoto = createAction(
  '[Photo Page] Add Photo',
  props<{ photo: Photo }>()
);

export const loadPhotos = createAction('[Photo Page] Load Photos');

export const loadPhotoSuccess = createAction(
  '[Photo API] Load Success',
  props<{ photos: Photo[] }>()
);

export const loadPhotoFailure = createAction(
  '[Photo API] Load Failure',
  props<{ error: string }>()
);
