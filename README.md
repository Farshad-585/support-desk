# Support Desk App

---
Support ticket application built with the MERN stack. This is part of Brad Traversy's [React Front to Back 2022](https://www.udemy.com/course/react-front-to-back-2022/?referralCode=4A622C7E48DB66154114) course on udemy. 

## About
Support Desk is a simple application for creating issue tickets regarding apple products. The main purpose of this application was for practicing the Redux toolkit for react.
Visit the website at https://farshad-support-desk.herokuapp.com/. You can either register your details or login with the following test credentials:
 - email: admin@gmail.com
 - password: password

---
## Features
  - User registration, authentication and authorization
  - User session maintainance
  - User login and logout
  - Error handling
  - Ticket creation
  - Not creation for each ticket
  - Viewing tickets (open or closed)
  - Protecting private routes both in frontend and backend

---
## Technologies
  - HTML5
  - CSS
  - Javascript
  - Asynchronous JavaScript
  - NodeJS
  - NPM
  - ExpressJS
  - MongoDB and Mongoose
  - Heroku

---
## Screenshots
<img width="731" alt="image" src="https://user-images.githubusercontent.com/61343458/166131979-6d69d817-b8a3-4035-bac1-a220e2e90a2a.png">
<img width="708" alt="image" src="https://user-images.githubusercontent.com/61343458/166131984-d88465e5-2ee8-4e61-8691-a64b8cfc8458.png">
<img width="712" alt="image" src="https://user-images.githubusercontent.com/61343458/166131989-9ee42ec4-c04d-4a3e-9429-a0cc49d4eb36.png">
<img width="704" alt="image" src="https://user-images.githubusercontent.com/61343458/166131996-c67bbd56-3961-4b97-922a-e521347d559b.png">


## Usage

### Set Environment Variables

Rename the .envexample to .env and add your [MongoDB](https://www.mongodb.com/) database URI and your JWT secret

### Install backend dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd frontend
npm install
```

### Run app in development (frontend & backend)

```bash
npm run dev
```
