# Brief introduction to Angular 4
This repo is for educational purpose only. I'll be giving an Introduction to Angular 4 in my job so I decided to publish the practice app we'll be developing :).

The application is a simple ToDo app. In order to make the CRUD operations of the tasks I decided to use [`json-server`](https://github.com/typicode/json-server) as a fake API.

## Usage:
To install `json-server` package run the following command:

`npm install -g json-server` (notice this will install the package globally)

Inside the app directory create a `db.json` file and insert the resource you'll be using: `"todo: []"`.

Then you can initialize the fake API running the following command in your terminal: `json-server --watch db.json`. Remember to run that command inside you working directory.

Finally, you can start the ToDo app  using `ng serve --open`.

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
