<template>
  <div style="margin-bottom: 1em;">
    <h1>{{ post.title }}</h1>
    <div class="row">
      <div class="col-xs-0 col-sm-0 col-md-0 col-lg-2"></div>
      <div class="col col-xs-12 col-sm-12 col-md col-lg-8">
        <h5>{{ post.short_description }}</h5>
        <p v-if="!!post.date">Date: {{ post.date }}</p>
        <p v-html="post.body"></p>
        <br />
        <p v-if="!!post.external_link"><a :href="post.external_link" target="_blank">Visit External Link</a></p>
      </div>
      <div class="col-xs-0 col-sm-0 col-md-0 col-lg-2"></div>
    </div>
      <!-- eslint-disable -->
    <router-link to="/data"><h2><-- Back to Data Projects</h2></router-link>
  </div>
</template>

<script>
import posts from '@/assets/projects/data.yml';

export default {
  data(){
    return {
      
    }
  },
  computed: {
      post() {
          let comparison_name = this.project;
          for(var c=0; c<posts.posts.length; c++){
              let query_name = posts.posts[c].id.toLowerCase();
              if(comparison_name === query_name){
                  return posts.posts[c];
              }
          }
          return "OOPS";
      }
  },
  props: {
    project: String
  }
}
</script>