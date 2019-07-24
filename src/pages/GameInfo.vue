<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header" >
              <h4 class="tituloTabla">GAME INFO</h4>
              <p class="subtituloTabla">All games take place on Saturday</p>
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
</template>

<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['FECHA', 'TEAMS', 'HORA', 'LUGAR', 'MAPA']
  const  tableData=[
          {
            fecha: "FECHA",
            teams: "TEAMS",
            hora: "HORA",
           lugar: "LUGAR",
                      
          },
          {
            fecha: "9/01",
            teams: "U1 and U4",
            hora: "09:30",
            lugar: "AJ Katzenmaier",
           /* mapa:"<a href=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110987!2d-87.6312390845582!3d41.90029237922041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556234344795!5m2!1ses-419!2sar>Click</a>",
          */ },
          
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
