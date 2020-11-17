<template>
  <div class="col">
    <router-link :to="{ name: 'View NSFW Reference', params: { char: char_name } }">
      <img :src="require('@/assets/char/thumb/'+char_name.toLowerCase()+'/thumb.png')" class="thumb">
      <!-- thumb="@/assets/char/thumb/'+char.char_name+'/thumb.png" -->
      <h2 style="font-family: 'Homemade Apple', cursive; margin-bottom: 1em;">{{ char_name.replace("_", " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }}</h2>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'CharacterTile',
  props: {
    char_name: String,
    // thumb: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumb {
  width: 10em;
  height: auto;
  margin-bottom: 1em;
}
</style>
