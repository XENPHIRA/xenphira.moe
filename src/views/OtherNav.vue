<template>
  <div class="about">
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"> 
    <h1 style="font-family: 'Homemade Apple', cursive; margin-bottom: 1em;">Other Pages</h1>
    <p style="text-align: center;">
      Here are the other pages available on the site, but that were not deemed important enough to make the nav bar. 
    </p>
    <br />

    <router-link to="/comm"><h2>Commission Waitlist</h2></router-link>
    <router-link to="/data"><h2>Data Projects</h2></router-link>
    
    <br />
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>