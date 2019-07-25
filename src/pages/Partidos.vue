
<template>


  
</template>

<script>
import PartidoDelDia from '../components/Partidos/PartidoDelDia'
import Card from '../components/Cards/Card'
import ChartCard from '../components/Cards/ChartCard'
import StatsCard from '../components/Cards/StatsCard'


import { scrypt } from 'crypto';


	export default {
    


    data() {
      return {
        partidos:[
          {
            fecha: "FECHA",
            teams: "TEAMS",
            hora: "Hora",
            lugar: "LUGAR"
          },
          {
            fecha: "9/01",
            teams: "U1 and U4",
            hora: "09:30",
            lugar: "AJ Katzenmaier"
          },{
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
          }
        ]
      }
    },
    props: {
    },
	  components: {
	    PartidoDelDia
    },
		name: "Partidos"
	}
</script>



<style scoped>
.sinPuntos {
list-style: none;

}

</style>

