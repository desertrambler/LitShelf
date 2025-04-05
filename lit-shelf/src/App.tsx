import robot from './assets/images/botty.png';
import type { Component } from 'solid-js';
import 'bulma/css/bulma.min.css';

const App: Component = () => {
  return (
    <div class="appContainer">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home / Dashboard
            </a>

            <a class="navbar-item">
              My Library
            </a>

            <a class="navbar-item">
              Book Clubs
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">
              Settings / Profile
            </a>
          </div>
        </div>
      </nav>
      <div class="container">
        <h1 style="text-align: center;">LitShelf</h1>
        <section class="login-container">
          <div class="left-half">
            <img src={robot} alt="We love to read" class="placeholder-image"/>
          </div>
          <div class="right-half">
            <div class="right-half-vertical-container" id="replaceableContainer">
                <div class="login-header-container">
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
        </section>
      </div>
    </div>
  );
};

export default App;
