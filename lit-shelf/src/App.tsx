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
        <div class="d-flex flex-column justify-content around align-items-center">
          <div class="d-flex justify-content-around align-items-center">
              <img src={robot} alt="We love to read" class="login-image w-25"/>
                <div class="d-flex flex-column">
                    <div class="login-header-container d-flex justify-content-center align-items-center">
                      <h2>Login</h2>
                    </div>
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-primary btn-primary-custom">Submit</button>
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
