<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ref">References</router-link> | 
      <router-link to="/nav">Other</router-link>
    </div>
    <router-view/>
    <div class="footer">
      <span>&copy; XENPHIRA {{ new Date().getFullYear() }}</span>
    </div>
  </div>
</template>

<style>

body {
  /* background-color: #000; */

  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #fff;
  background: #000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: #279AE0;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #FEB6E0;
}

.footer {
 
    position: relative;
 
    height: 2em;
 
    bottom: 0;
 
    width: 100%;
 
    /* background-color: #f5f5f5; */
    background-color: #000;
 
}
</style>
