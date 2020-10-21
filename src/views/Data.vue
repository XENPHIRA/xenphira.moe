<template>
  <div style="margin-bottom: 1em;">
    <span v-for="(post, index) in posts.posts" v-bind:key="index">
      <div class="row" v-if="index > 0">
        <div class="col">
          <h2>{{ post.title }}</h2>
          <p>{{ post.short_description }}</p>
          <br />
          <router-link :to="{ name: 'View Data Project', params: { project: posts.posts[index].id } }">
            View this Project -->
          </router-link>
        </div>
      </div>
      <hr style="background-color: #fff;"/>
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      posts: require('@/assets/projects/data.yml')
    }
  }
}
</script>