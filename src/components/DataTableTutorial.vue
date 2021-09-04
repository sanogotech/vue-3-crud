<template>
  
  <h1>Therichpost.com</h1>
   
   <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Job Title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.job_title}}</td>
      </tr>
      
    </tbody>
  </table>
  
</template>

<script>

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css'; //for table good looks
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import $ from 'jquery'; 

import axios from 'axios';

export default {
 
  mounted(){
    //API Call
    axios
    .get("https://www.testjsonapi.com/users/")
    // .then((res)=>
    // {
      // this.users = res.data;
      // $('#example').DataTable();
    // })
  // },
  .then((res)=>
    {
      this.users = res.data;
      setTimeout(function(){
      $('#example').DataTable(
          {
              pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'print'
                    ]
          }
      );
      },
        1000
        );
    })
  },
  data: function() {
        return {
            users:[]
        }
    },
}
</script>






