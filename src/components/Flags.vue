<template>
  <div style="margin-bottom: 1em;">
    <!-- TODO: FLAGS GO HERE. {{flags}} -->
    <span v-for="flag in flags" v-bind:key="flag">
      <img v-if="flag==='ace'" :src="require('@/assets/flags/ace.svg')" class="flag"/>
      <img v-if="flag==='aro'" :src="require('@/assets/flags/aro.svg')" class="flag"/>
      <img v-if="flag==='bi'" :src="require('@/assets/flags/bi.svg')" class="flag"/>
      <img v-if="flag==='gay'" :src="require('@/assets/flags/gay.svg')" class="flag"/>
      <img v-if="flag==='les'" :src="require('@/assets/flags/les.svg')" class="flag"/>
      <img v-if="flag==='nb'" :src="require('@/assets/flags/nb.svg')" class="flag"/>
      <img v-if="flag==='pan'" :src="require('@/assets/flags/pan.svg')" class="flag"/>
      <img v-if="flag==='trans'" :src="require('@/assets/flags/trans.svg')" class="flag"/>
    </span>
  </div>
</template>

<script>

export default {
  name: 'Flags',
  props: {
    flags: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flag {
  height: 4em;
  width: auto;
}
</style>
