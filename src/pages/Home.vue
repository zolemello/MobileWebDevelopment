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
              <p class="subtituloTabla">The next 3 matches. See Game Info for the full</p>
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
  const tableColumns = ['FECHA', 'TEAMS', 'HORA', 'LUGAR']
  const  tableData=[
          
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

</style>


  

