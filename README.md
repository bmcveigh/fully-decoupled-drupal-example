# Fully Decoupled Drupal Example
A fully decoupled [Drupal 8](https://www.drupal.org) site running on [Docksal](https://docksal.io) for the backend running with [React](https://reactjs.org), [Material UI](https://material-ui.com), and [GraphQL](https://graphql.org) for the frontend.

## Installation

**Set up backend**
```
cd backend && fin composer install && fin init
```

_Note: if restarting an already installed Drupal site, you can start the application simply by running `cd backend && fin project start`._

**Set up frontend**
```
cd frontend && npm install && npm start
```

## Technologies used

### Backend
* [Drupal 8](https://www.drupal.org)
* [ContentaCMS](https://www.contentacms.org)

### Frontend
* [ReactJS](https://reactjs.org)
* [MaterialUI](https://material-ui.com)
* [GraphQL](https://graphql.org)
