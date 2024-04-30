import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Photo } from './models/photo.model';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideMockStore({})],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should select photo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mock: Photo = {author: 'Carlos', download_url: 'https://picsum.photos/200/300.webp', id: '1', }
    app.selectePhoto(mock);
    expect(app.selectedPhoto).toEqual(mock);
  });

  it('should clear photo selection', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.clearSelection();
    expect(app.selectedPhoto).toEqual(null);
  });

});
