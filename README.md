# ImgChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

ImgChallenge is a responsive APP, the result of a code challenge for an Angular Front End Position at Build Global.

We are using: Ngrx, Bootstrap. Rxjs and Angular to solve the next AC:

Evaluation topic
The interviewee will develop an Angular application using Ngrx. Feel free to use any
libraries to complete the challenge.
It’s required to build an application that fetches images from https://picsum.photos
and displays them on the screen. There is a recorded demo here to provide a preview
of what is expected from the exercise: https://streamable.com/fkebp


App should fit to the screen (no vertical/horizontal scrolling).
• Images list should display 30 images from the API using the store. 
• Image list should vertically scroll.
• Clicking on an image should select and display it on the right side.
• Clear button should clear the image selection.
• Not seen in demo: Include functionality to add new images to the list from your
local hard drive.
o Due to the limited time for this challenge, the goal of this feature is to
enable users to upload images directly from local environment and add
them to the store, we don’t look for persisting the images, meaning that
if the application is reloaded, we don’t expect to see the same images.
• Feel free to optimize or improve any aspects of the application for additional
brownie points. (ChangeDetectionStrategy, modern image format webp (photo.effects.ts))

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
