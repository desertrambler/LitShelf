<script lang="ts">
  
</script>

<main>
  <div class="w3-container">
    <h1 style="text-align: center;">LitShelf</h1>
    <section class="login-container">
      <div class="left-half">
        <img src="static/images/images/robot.png" alt="We love to read" class="placeholder-image"/>
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
            <!--<div>
              <button class="button-primary" 
                style="margin-top: 20px;" 
                id="registerButton"><a x-target="replaceableContainer"
                method="get" href="/switch_login_form">Register</a>
              </button>
            </div>-->
        </div>
      </div>
    </section>
  </div>
</main>

<style>

.login-container {
	display: flex;
	margin: 50px;
}

.left-half {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.placeholder-image {
	width: 50%;
	height: auto;
	border-radius: 50%;
}

.right-half {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.login-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 250px;
}

.input-field {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.login-button {
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.login-button:hover {
	background-color: #0056b3;
}  

.login-header-container {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
}

.right-half-vertical-container {
	display: flex;
	flex-direction: column;
}
  
</style>
