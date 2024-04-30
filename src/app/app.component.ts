import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { selectAllPhotos } from './state/photos/photo.selector';
import { addPhoto, loadPhotos } from './state/photos/photo.actions';
import { Photo } from './models/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  allPhotos$ = this.store.select(selectAllPhotos);
  selectedPhoto: Photo | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadPhotos());
  }

  selectePhoto(photo: Photo ) {
    this.selectedPhoto = { ...photo };
  }

  clearSelection() {
    this.selectedPhoto = null;
  }

  addPhoto(photo: Photo) {
    this.store.dispatch(addPhoto({ photo: photo }));
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files) {
        this.addPhoto({
          id: files[0].name,
          download_url: URL.createObjectURL(files[0]),
          author: files[0].name
        });
    }
  }
}
