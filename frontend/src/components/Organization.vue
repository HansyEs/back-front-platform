<template>
  <div class="container-fluid organization">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Organization</a>
      </li>
      <li class="breadcrumb-item active"></li>
    </ol>
    
    <div class="row">
      <div class="col-sm-12">
        <div class="message">
          <!-- TO DO -> Bind class to response status -->
          <p class="bg-success fs-s">{{msg}}</p>
        </div>
      </div>
    </div>

    <div class="table-responsive">
    <div class="dataTables_wrapper container-fluid dt-bootstrap4" id="dataTable_wrapper">

      <div class="row mb-s mt-s">

        <div class="col-sm-12 col-md-6">
          <div class="dataTables_length" id="dataTable_length">
            <label>Show
              <select name="dataTable_length" aria-controls="dataTable" class="form-control form-control-sm">
                <option value="10">10</option><option value="25">25</option>
                <option value="50">50</option><option value="100">100</option>
              </select> entries
            </label>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div id="dataTable_filter" class="dataTables_filter withIcon">
            <label><i class="fa fa-search" title="Search"></i>
              <input placeholder="Type your search..." type="search" class="form-control form-control-sm" aria-controls="dataTable">
            </label>
          </div>
        </div>

        <!-- ITEMS LOOP ORIGINAL -->
        <!-- 
        <div class="items">
          <div class="item" v-for="item in items">
            <p>{{item.name}}</p>
          </div>
        </div>
        -->
      </div>

      <div class="row">
        <div class="col-sm-12">

          <!-- ITEMS LOOP TABLE -->
          <table id="dataTable" class="items-table">

            <thead>
              <th><td>#ID</td></th>
              <th><td><i class="fa fa-circle-user-o"></i></td></th>
              <th><td>Name</td></th>
              <th><td>Nickname</td></th>
              <th><td>Birth Date</td></th>
              <th><td>Admin</td></th>
            </thead>

            <tbody>
              <tr class="item" v-for="item in items">
                <td class="text-center tb-id">{{item.user_id}}</td>
                <td class="tb-img"><div class="user-img-sm"><img :src="item.imageURL"></div></td>
                <td class="user-name"><b>{{item.name}}</b> {{item.surname}}</td>
                <td>{{item.nick_name}}</td>
                <td>{{item.birth_date}}</td>
                <td>{{item.admin}}</td>
              </tr>
            </tbody>

          </table>
          <!-- END ITEMS LOOP TABLE -->

        </div>
      </div>

    </div>
  </div>
    
  </div>
</template>

<script>

// AJAX for VUE with
import axios from 'axios';

export default {

  name: 'Organization',

  data() {
    return {
      msg: 'Wait',
      items: []
    }
  },

  created: function(){

    //console.log('[COMP CREATED]::Organization'); // useful for understanding the lifecycle

    var that = this; // Saving this as that to keep access to all components

    // AXIOS API request to Express Server
    var urlAPI = 'http://localhost:3000/api/v1.0/users';

    axios.get(urlAPI)
      .then(function (response) {
        //console.log(response.data);
        that.items = response.data;
        that.msg = 'Loaded';
      })
      .catch(function (error) {
        console.log(error);
        that.msg = error.data;
      });

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- IF not used comment please 
<style scoped>

</style>
-->
