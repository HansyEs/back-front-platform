<template>
  <div class="container-fluid user-profile">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Profile</a>
      </li>
      <li class="breadcrumb-item active"></li>
    </ol>

    <div class="row mt-xl">

      <div class="col-sm-12 text-center">
        <div class="user-img center-div">
          <img src="" alt="" />
        </div>
      </div>

      <div class="col-sm-12">
        <div class="user-name text-center">
          <h3>User name user name user name user name</h3>
        </div>
      </div>

      <div class="col-sm-12 user-role text-center">
        <p>Admin</p>
      </div>

      <div class="col-sm-12">
        <div class="clearfix divider mt-l mb-l"></div>
      </div>

      <div class="col-sm-12">
        <h5>User bio</h5>
      </div>

      <div class="col-sm-12">
        <div class="user-bio">
          <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

// AJAX with vue
import axios from 'axios';

export default {

  name: 'Profile',

  data() {
    return {
      user: ''
    }
  },

  created: function(){

    console.log('Profile::created'); // useful for understanding the lifecycle

    var that = this; // Saving this as that to keep access to all components

    // TO DO -> get user ID
    // TO DO -> API get/user:id

    // AXIOS API request to Express Server
    /*
    axios.get('http://localhost:3000/api/user:id')
      .then(function (response) {
        //console.log(response.data);
      })
      .catch(function (error) {
        //console.log(error);
        that.msg = error.data;
      });
    */

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- TO DO -> ADD Vue SCSS -->
<!-- If not used please comment -->
<!--
<style scoped>

</style>
-->
