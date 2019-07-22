<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>
       </div> 
<!--Mi prueba -->
       <div class="row">
         <div class="box">
          <stats-card>
           
            <div slot="content" class="conenido">
              <h4 class="card-title">	AJ Katzenmaier</h4>
             <div>  <p> 24 W. Walton St., Chicago, IL 60610</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110987!2d-87.6312390845582!3d41.90029237922041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556234344795!5m2!1ses-419!2sar" width="300" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            </div>

            </stats-card>
        </div>
       </div>

  <!--FIN mi prueba -->

  </div>

  </div>


</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'

  export default {
    components: {
      ChartCard,
      StatsCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
          }
        },
        
             
      }
    }
  }
</script>
<style>
.card-title {
  text-align: center;
}
.box {
   width:400px;
   background-color: cadetblue;
   
}

.contenido {
  align-content: center;
  
}
</style>
