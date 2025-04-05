<script lang="ts">
  import robot from './assets/images/botty.png'
</script>

<main>
  <nav class="bg-gray-800 p-4">
    <button class="lg:hidden text-white" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="lg:flex hidden" id="navbarNav">
      <ul class="flex space-x-4">
        <li>
          <a class="text-white" href="#">Home / Dashboard</a>
        </li>
        <li>
          <a class="text-white" href="#">My Library</a>
        </li>
        <li>
          <a class="text-white" href="#">Book Clubs</a>
        </li>
        <li>
          <a class="text-white" href="#">Settings / Profile</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mx-auto p-4">
    <h1 class="text-center text-3xl font-semibold mb-8">LitShelf</h1>
    <div class="flex flex-col justify-around items-center">
      <div class="flex justify-around items-center">
        <img src={robot} alt="We love to read" class="w-1/4 rounded-full"/>
        <div class="flex flex-col items-center">
          <div class="flex justify-center items-center mb-4">
            <h2 class="text-2xl font-semibold">Login</h2>
          </div>
          <form class="w-full max-w-sm">
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter email" />
              <small class="text-muted text-xs">We'll never share your email with anyone else.</small>
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
            <div class="flex items-center mb-4">
              <input type="checkbox" id="remember" class="mr-2 leading-tight" />
              <label for="remember" class="text-sm text-gray-600">Remember Me?</label>
            </div>
            <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Submit</button>
          </form>
          <div class="mt-4">
            <button class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
