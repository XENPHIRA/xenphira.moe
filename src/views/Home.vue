<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Landing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: {
    Landing
  }
}
</script>
