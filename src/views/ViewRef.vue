<template>
  <div>
    <div v-if="chr.enabled">
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Press+Start+2P&family=Rock+Salt&family=Permanent+Marker&display=swap" rel="stylesheet">
        <h2 style="font-family: 'Homemade Apple', cursive; font-size: 4em; margin-bottom: 0.5em;">
            {{ chr.name }}
        </h2>

        <Flags :flags="chr.flags"/>

        <h3 style="font-family: 'Permanent Marker', cursive; margin-bottom: 0em;">Species: {{ chr.species }}</h3>
        <h4 style="font-family: 'Permanent Marker', cursive; margin-bottom: 0em;">{{ chr.pronouns }}</h4>
        <h4 style="font-family: 'Permanent Marker', cursive; margin-bottom: 0em;">Orientation: {{ chr.orientation }}</h4>
        <h4 style="font-family: 'Permanent Marker', cursive; margin-bottom: 1em;" v-if="!!chr.meta_info.physical.age">Age: {{ chr.meta_info.physical.age }}</h4>

        <!-- color palette -->
        <div class="row" style="margin-left: auto; margin-right: auto; width: 100%">
          <div class="col-12 col-sm col-md col-lg" v-for="color in chr.meta_visual.colors" v-bind:key="color.label"
          :style="'background-color: '+color.color+';text-shadow: 1px 1px #000000;'+
          'text-align: center; vertical-align: center; padding: 2em;border-style:solid;'">{{color.label}}<br />{{color.color}}</div>
        </div>

        <div class="row">
          <div class="col-12">
            <img 
              :src="require('@/assets/char/ref/'+chr.shortname.replace(' ','_')+'/ref.png')"
              class="refsheet"
            >
            <p>Reference Sheet by <a :href="chr.meta_visual.sfw_ref.artist_link" target="_blank">{{chr.meta_visual.sfw_ref.artist_name}}</a></p>
          </div>
        </div>

        <!-- view sfw art link -->
        <span v-if="!!(chr.meta_visual.path_to_sfw_art)">
          <router-link :to="{ name: 'View Art', params: { char: char } }">
            <p>Click to view art of this character!</p>
          </router-link>
        </span>

        <!-- adoption -->
        <div class="row">
          <div class="col" v-if="chr.meta_info.adoption_info.adopted">
            <h5>Character was adopted :)</h5>
            <p>{{ chr.name }} was adopted from <a :href="chr.meta_info.adoption_info.original_owner.owner_link" target="_blank">{{ chr.meta_info.adoption_info.original_owner.owner_name }}</a></p>
          </div>
        </div>

        <!-- likes and dislikes -->
        <div class="row">
          <div class="col" v-if="!!chr.meta_info.personality.likes">
            <h3>Likes</h3>
            <ul style="text-align: left;">
              <li v-for="like in chr.meta_info.personality.likes" v-bind:key="like">{{like}}</li>
            </ul>
          </div>
          <div class="col" v-if="!!chr.meta_info.personality.dislikes">
            <h3>Dislikes</h3>
            <ul style="text-align: left;">
              <li v-for="dislike in chr.meta_info.personality.dislikes" v-bind:key="dislike">{{dislike}}</li>
            </ul>
          </div>
        </div>

        <!-- general traits -->
        <div class="row" v-if="!!chr.meta_info.personality.traits">
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
          <div class="col">
            <h3>Character Traits</h3>
            <ul style="text-align: left;">
              <li v-for="trait in chr.meta_info.personality.traits" v-bind:key="trait">{{trait}}</li>
            </ul>
          </div>
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
        </div>

        <!-- relationships -->
        <div class="row" v-if="!!chr.meta_info.relationships">
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
          <div class="col">
            <h3>Relationships</h3>
            <ul style="text-align: left;">
              <li v-for="relationship in chr.meta_info.relationships" v-bind:key="relationship"><span style="font-weight: bold;">{{relationship.with}}:</span> {{relationship.description}}</li>
            </ul>
          </div>
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
        </div>

        <!-- AUs -->
        <div class="row" v-if="!!chr.meta_info.au">
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
          <div class="col">
            <h3>Notable AUs</h3>
            <ul style="text-align: left;">
              <li v-for="au in chr.meta_info.au" v-bind:key="au"><span style="font-weight: bold;">{{au.name}}:</span> {{au.description}}</li>
            </ul>
          </div>
          <div class="col-xs-0 col-sm-0 col-md col-lg"></div>
        </div>

    </div>
    <div v-else>
        <p>Sorry, something's gone wrong.</p>
    </div>
  </div>
</template>

<script>

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

import Flags from '@/components/Flags.vue'

export default {
  components: {
    Flags
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
  props: {
    char: String,
  }
}

</script>

<style scoped>
.refsheet {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>