
# User Authentication System

This project is a simple **User Authentication System** that provides a frontend and backend interface for users to sign up and sign in, with token generation for session management.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

## Overview

This project contains:
1. A **backend** built with Express.js, where users can register and log in, generating a token for user authentication.
2. A **frontend** built with HTML, CSS, and JavaScript (using Axios) that allows users to sign up, log in, and view user details upon successful login.

The frontend and backend are connected via HTTP requests, enabling users to perform the sign-up and sign-in actions smoothly.

## Features
- User registration with a username and password.
- User login with token-based authentication.
- Fetch and display user information after successful login.
- Clean and modern UI.
- Responsive design for mobile devices.

## Technologies Used
### Backend:
- **Node.js**
- **Express.js**
- **CORS**
  
### Frontend:
- **HTML5**
- **CSS3**
- **JavaScript**
- **Axios** for making API requests

## Setup Instructions

### Backend Setup:
1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Run the backend server:
    ```bash
    node app.js
    ```
4. Your backend will now be running at `http://localhost:3000`.

### Frontend Setup:
1. Open the `index.html` file in a browser (you can serve it with VSCode Live Server or a similar tool).

## Usage

1. **Sign Up**:
   - Fill in the username and password fields in the "Sign Up" form.
   - Click the "Sign Up" button to register a new user.
  
2. **Sign In**:
   - Enter your username and password in the "Sign In" form.
   - Click the "Sign In" button to log in.
   - Upon successful login, a token will be generated and displayed. The user details (username and password) will also be shown.

3. **View User Information**:
   - After logging in, you can view the user information retrieved from the backend.

## API Endpoints

### `POST /signup`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "exampleUsername",
    "password": "examplePassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Sign up successful!"
  }
  ```

### `POST /signin`
- **Description**: Authenticates a user and generates a token.
- **Request Body**:
  ```json
  {
    "username": "exampleUsername",
    "password": "examplePassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "yourToken1234"
  }
  ```

### `GET /me`
- **Description**: Returns the details of the user based on the token provided in the request header.
- **Request Headers**:
  - `token`: The authentication token received upon login.
- **Response**:
  ```json
  {
    "username": "exampleUsername",
    "password": "examplePassword"
  }
  ```

## Screenshots
![image](https://github.com/user-attachments/assets/c2ebdffb-8fc3-42aa-9afd-fca706052c8d)

## License
This project is licensed under the MIT License.

