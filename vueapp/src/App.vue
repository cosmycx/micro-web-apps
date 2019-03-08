<template>
  <div id="app">

    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
      <!-- Navbar content -->
      <a class="navbar-brand" href="/">Great-Micro-App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home/Login<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reactapp1">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reactapp2">Product</a>
          </li>
          <li class="nav-item active">
              <a class="nav-link" href="/vueapp">Cart</a>
            </li>
        </ul>
      </div>
    </nav>
    
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
