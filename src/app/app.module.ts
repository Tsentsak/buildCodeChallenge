import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { photoReducer } from './state/photos/photo.reducer';
import { PhotoEffects } from './state/photos/photo.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({photos: photoReducer}, {}),
    EffectsModule.forRoot([PhotoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
