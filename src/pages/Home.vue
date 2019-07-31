<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header" >
              <h4 class="tituloTabla">UPCOMING EVENTS</h4>
              <p class="subtituloTabla">See <a href="../admin/game-info">GAME INFO</a> for the full schedule</p>
              <p class="textoContenido" ><em><strong>August 4</strong></em></p>
              <p class="textoContenido">NSYL Fundraiser</p>
              <p class="textoContenido"><strong><em>August 16</em></strong></p>
              <p class="textoContenido">Season Kick-off: Meet the Teams</p>
              <p class="textoContenido"><strong><em>September 1</em></strong></p>
              <p class="textoContenido"> First Game of Season (Check Game Schedule for details) </p>
                 
            </template>
            
          </card>

        </div>
      </div>

    
    </div>
  </div>
</template>

<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  
  
  export default {
    components: {
      LTable,
      Card
    },
     
  } 
 </script>
<style>
.strpied-tabled-with-hover {
  background-color: darkslategrey;
  align-content: center;
}

.tituloTabla {
  align-content: center;
  text-align: center;
  font-weight: bold; 
  color: black;
  font-size: 25px;
  
}

.subtituloTabla {
   align-content: center;
  text-align: center;
  font-style: italic;
  color: grey;
  font-size: 15px;
  
}

.textoContenido {
  font-size: 14px;
  color: black;
  text-align: center;
}
</style>


  

