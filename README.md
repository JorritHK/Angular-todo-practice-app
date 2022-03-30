# Angular practice

This project contains a rather basic webapp featuring a todo list which users can interact with.
This is broken up into a few different sections:

1. Frontend application using Angular 13.0.0
2. MongoDB database from Dockerimage <version 5.0.6> and MongoExpress to be able to visualise the database
3. Custom NodeJS REST API to handle traffic to database (Found in folder API/)

## How to run

To run MongoDB and MongoExpress execute:

    docker-compose -f Database/docker-compose.yaml up

Initialize API:

    node API/API.js

Start the angular development server and open window at `localhost:4200`:
  
    ng serve -o

## Future work
I intend to also dockerize the Angular service and the API so everything is package neatly.
Apart from that I would like to add more functionality like:
1. logins
2. generating images based on the text entered
3. goals and rewards

Cool climbing image, because climbing is life:

![A cool image](https://media.istockphoto.com/photos/female-rock-climber-in-margalef-catalonia-spain-picture-id622956050?k=20&m=622956050&s=612x612&w=0&h=PfX5ycyZq15EM3NtlH-LI5AFyFjikN4AyL0NJ0UTIJ8=)





# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

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
