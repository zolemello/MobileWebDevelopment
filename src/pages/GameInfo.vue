<template>
<div>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive">
            <template slot="header" >
              <h4 class="tituloTabla">GAME INFO</h4>
              <p class="subtituloTabla">All games take place on Saturday. To see the locations go <a href="/admin/locations">HERE</a></p>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table> 
          </card>

        </div>
      </div>
    </div>
  </div>

</div>
  
</template>

<script>


  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['FECHA', 'TEAMS', 'HORA', 'LUGAR', 'MAPA']
  var tableData=[
          
          {
            fecha: "9/01",
            teams: "U1 and U4",
            hora: "09:30",
            lugar: "AJ Katzenmaier"
                       
          },
          
          {
            fecha: "9/01",
            teams: "U3 and U2",
            hora: "1:00",
            lugar: "Greenbay"
          },{
            fecha: "9/08",
            teams: "U5 and U6",
            hora: "09:30",
            lugar: "Howard A Yeager"
          },{
            fecha: "9/08",
            teams: "U6 and U1",
            hora: "1:00 PM",
            lugar: "Marjorie P Hart"
          },{
            fecha: "9/15",
            teams: "U2 and U4",
            hora: "09:30",
            lugar: "North"
          },
          
          {
            fecha: "9/15",
            teams: "U2 and U4",
            hora: "09:30",
            lugar: "North"
          },
          
          {
            fecha: "9/15",
            teams: "U3 and U5",
            hora: "1:15 PM",
            lugar: "AJ Katzenmaier"
          },

          {
          fecha: "9/22",
          teams: "U1 and U3",
          hora: "9:30 a.m.",
          lugar: "South"
          }, 

          {
          fecha: "9/22",
          teams: "U2 and U6",
          hora: "1:00 p.m.",
          lugar: "Howard A Yeager"
          },

          {
            fecha: "9/29",
          teams: "U4 and U5",
          hora: "9:30 a.m.",
          lugar: "Greenbay"
          },
        ]
  
 
  
  export default {  

    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

 
  </script>





<style>
.strpied-tabled-with-hover {
  background-color: rgb(54, 66, 93);
  align-content: center;
  text-decoration-color: aliceblue;
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



</style>
