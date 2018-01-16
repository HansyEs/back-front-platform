<template>
  <footer class="sticky-footer">
    <div class="container">
      <div class="text-right primary">
        <small>© TalentTools 2017</small>
      </div>
    </div>
  </footer>
</template>

<script>

import auth from '@/auth/auth'

export default {

  name: 'app-footer',

  data() {
    return {
    }

  },

  created: function(){
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TO DO -> ADD Vue SCSS -->
<style lang="scss" scoped>

  footer {
    background-color: #fff !important;
  }

</style>
