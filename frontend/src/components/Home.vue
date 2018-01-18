<template>
  <div class="container-fluid">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Welcome</a>
      </li>
      <li class="breadcrumb-item active">My Dashboard</li>
    </ol>
    <!--
    <div class="items">
      <div class="item" v-for="item in items">
        <h2>{{item.name}}</h2>
        <img :src="item.imageURL">
      </div>
      <div class="message">
        <p>{{msg}}</p>
      </div>
    </div>
    -->
  </div>
</template>

<script>

// AJAX with vue
import axios from 'axios';

export default {

  name: 'Home',

  data() {
    return {
      msg: ''
    }
  },

  created: function(){

    console.log('[COMP CREATED]::Home'); // useful for understanding the lifecycle

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TO DO -> ADD Vue SCSS -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
pre, p {
  text-align: left;
}
img {
  max-width: 50vh;
}
</style>
