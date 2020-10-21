<template>
  <div>
    <div v-if="chr.enabled">
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Press+Start+2P&family=Rock+Salt&family=Permanent+Marker&display=swap" rel="stylesheet">
        <h2 style="font-family: 'Homemade Apple', cursive; font-size: 4em; margin-bottom: 0.5em;">
            {{ chr.name }} | Art
        </h2>

        <!-- return to ref link -->
        <span v-if="chr.enabled">
          <router-link :to="{ name: 'View Reference', params: { char: char } }">
            <p>Click to return to the reference page for this character!</p>
          </router-link>
        </span>

        <div class="row" style="margin-left: auto; margin-right: auto;">
          <span v-for="art in getSFWArt(chr)" v-bind:key="art">
            <div
              class="col" v-if="notHidden(art)">
              <a :href="art" target="_blank">
                <img class="art" :src="art">
              </a>
              <br />
              <p class="sourcelink" v-html="getSource(art)"></p>
            </div>
          </span>
        </div>

    </div>
    <div v-else>
        <p>Sorry, something's gone wrong.</p>
    </div>
  </div>
</template>

<script>

import platforms from '@/assets/mappings/platforms.json';

import data_astra from '@/assets/char/lore/characters/astra.yml';
import data_bun_pat from '@/assets/char/lore/characters/bun_pat.yml';
import data_cocoa from '@/assets/char/lore/characters/cocoa.yml';
import data_kae from '@/assets/char/lore/characters/kae.yml';
import data_leo from '@/assets/char/lore/characters/léo.yml';
import data_seth from '@/assets/char/lore/characters/seth.yml';
import data_xen from '@/assets/char/lore/characters/xen.yml';
import data_yvette from '@/assets/char/lore/characters/yvette.yml';

const charData = {
    characters: [
        data_astra,
        data_bun_pat,
        data_cocoa,
        data_kae,
        data_leo,
        data_seth,
        data_xen,
        data_yvette
    ]
};

export default {
  components: {
  },
  data(){
    return {
    }
  },
  computed: {
      chr() {
          let comparison_name = this.char.replace("_", " ");
          for(var c=0; c<charData.characters.length; c++){
              let query_name = charData.characters[c].shortname.toLowerCase();
              if(comparison_name === query_name){
                  return charData.characters[c];
              }
          }
          return "OOPS";
      }
  },
  methods: {
    getSFWArt: function(c){
      var allFiles = null;

      if(c.shortname === 'astra'){
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/astra', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      } else if(c.shortname === 'bun pat') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/bun_pat', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      }  else if(c.shortname === 'cocoa') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/cocoa', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      }  else if(c.shortname === 'kae') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/kae', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      }  else if(c.shortname === 'léo') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/léo', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      } else if(c.shortname === 'seth') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/seth', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      } else if(c.shortname === 'xen') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/xen', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      } else if(c.shortname === 'yvette') {
        allFiles = (ctx => {
          let keys = ctx.keys();
          let values = keys.map(ctx);
          return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('@/assets/char/art/yvette', true, /\/sfw.*(\.png|\.jpe?g|\.gif)/));
      }
      else { allFiles = []; }
      
      return allFiles;
    },
    notHidden: function(a){
      return !(a.toLowerCase().includes("hide."))
    },
    getSource: function(a){
      let artistName = "";
      let artistPlatform = "";
      
      if(a.includes("^")){
        // deal with usernames with "." in them
        artistName = a.split("^")[1];
        artistPlatform = a.split("^")[2];
      } else {
        artistName = a.split(".")[1];
        artistPlatform = a.split(".")[2];
      }

      let generatedArtistLink = "";
      
      try {
        generatedArtistLink = platforms[artistPlatform].replace("<UNAME>", artistName);
      } catch (error) {
        generatedArtistLink = platforms['UNKNOWN'].replace("<UNAME>", artistName);
      }

      let srcStringHTML = "<a href=\""+generatedArtistLink+"\" target=\"_blank\">"+artistName+"</a>";
      return srcStringHTML;
    }
  },
  props: {
    char: String,
  }
}

</script>

<style scoped>
.art {
  height: 12em;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

.sourcelink {
  margin-bottom: 1em;
}
</style>