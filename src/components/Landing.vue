<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Press+Start+2P&family=Rock+Salt&display=swap" rel="stylesheet">

    <div class="row">
      <div class="col-6">
        <p class="landing-header">Hello World!</p>
        <p class="landing-header-2">I am XENPHIRA.</p>
        <p style="text-align: left;">
          You may know me from such places as: 1) the internet.
        </p>
        <div style="height:1em;"></div>
      </div>
      <div class="col-6" id="landing"></div>
    </div>

    <div class="row">
      <div class="col">
        <p style="text-align: left;">
          Welcome to my corner of the web! Here, I will host information about me, contact methods, projects, references, and commissions for which I am waiting. 
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p style="text-align: left;">
          Please see the navigation bar at the top to move around the site. If you find there is a bug in how the site works, please feel free to contact me at the email address listed on the about page. Other welcomed communications via email include: inquiries/requests about using my characters' likeness and/or existing art. I also have my social media profiles and messenger handles listed for a means of contact. 
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p style="text-align: left;">
          Special thanks to PUNXsimon, the artist who rendered the image of Xen you see here on the homepage. Their work can be found on their <a href="https://twitter.com/PUNXSimon" target="_blank">Twitter</a>. 
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing{
  background: url("../assets/site-graphics/xen_punx_crop.png") top center no-repeat;
  background-size: contain;
  /* left: 1em; */
}

.landing-header {
  font-family: 'Press Start 2P', cursive;
  font-size: xx-large;
}

.landing-header-2 {
  /* font-family: 'Homemade Apple', cursive; */
  font-family: 'Rock Salt', cursive;
  font-size: x-large;
}
</style>
