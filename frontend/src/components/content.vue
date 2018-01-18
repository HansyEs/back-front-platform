<template>
  <div class="content-wrapper">
    <h1>Content</h1>
  </div>
</template>

<script>

// AJAX with vue
import axios from 'axios';

export default {

  el: '#app',

  name: 'content',

  data() {
    return {
    }
  },

  created: function(){
    console.log('[COMP CREATED]::Content');
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TO DO -> ADD Vue SCSS -->
<style scoped>

</style>
