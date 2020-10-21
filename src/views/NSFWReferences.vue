<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Press+Start+2P&family=Rock+Salt&display=swap" rel="stylesheet">
    <h1 style="font-family: 'Homemade Apple', cursive; margin-bottom: 1em;">Character References</h1>
    <div class="row">
      <CharacterTile v-for="char in charList" :key="char.char_name" :char_name="char" />
    </div>
  </div>
</template>

<script>
import CharacterTile from '@/components/NSFWCharacterTile.vue'


export default {
  components: {
    CharacterTile
  },
  data(){
    return {
      charList: (function(){
        const charfiles = require.context(
          '@/assets/char/lore/characters',
          true,
          /^.*\.yml$/
        )
        let yml_list = charfiles.keys();
        let name_list = [];
        
        for (var i=0; i<yml_list.length; i++){
          name_list.push(yml_list[i].replace("./","").replace(".yml",""));
        }

        return name_list;
      })()
    }
  }
}
</script>