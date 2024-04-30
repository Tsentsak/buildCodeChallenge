
import { addPhoto, loadPhotoFailure, loadPhotoSuccess, loadPhotos } from "./photo.actions";
import { PhotoState } from "src/app/models/photo.model";
import { createReducer, on } from "@ngrx/store";

export const initialState: PhotoState = {
  photos: [],
  error: null,
  status: 'pending'
};

export const photoReducer = createReducer(
  initialState,
  on(addPhoto, (state, { photo }) => ({
    ...state,
    photos: [photo, ...state.photos]
  })),
  on(loadPhotos, (state) => ({ ...state, status: 'loading' as const })),
  on(loadPhotoSuccess, (state, { photos }) => ({
    ...state,
    photos: photos,
    error: null,
    status: 'success' as const,
  })),
  on(loadPhotoFailure, (state, { error }) => ({
    ...state, error: error
  }))
);
