import robot from './assets/images/botty.png';
import type { Component } from 'solid-js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: Component = () => {
  return (
    <div class="app-container">
      <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home / Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Library</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Book Clubs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Settings / Profile</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <h1 class="text-center">LitShelf</h1>
        <div class="d-flex justify-content-around align-items-center">
          <div class="d-flex justify-content-center align-items-center">
            <img src={robot} alt="We love to read" class="login-image"/>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column">
                <div class="login-header-container d-flex justify-content-center align-items-center">
                  <h2>Login</h2>
                </div>
                <form class="login-form" id="login-form" method="post" action="/login">
                  <input type="text" placeholder="Username" name="username" class="input-field" required/>
                  <input type="password" placeholder="Password" name="password" class="input-field" required/>
                  <button class="login-button button-primary" type="submit" id="loginButton">Login</button>
                </form>
                <div>
                  <button class="button-primary" 
                    style="margin-top: 20px;" 
                    id="registerButton">Register
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
