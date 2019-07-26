
<template>

<b-card style="width: 20rem;" bg-variant="dark" text-variant="light" class="text-center">
    <h3 class="card-title">{{fecha.month}}/{{fecha.day}}</h3>
    <h4 class="card-subtitle">{{hora}}</h4>
    <hr />
    <p class="card-text">{{local}} vs. {{visitante}}</p>
    <b-button :href="lugar.mapURL" variant="light">{{lugar.name}}</b-button>
     <!--     <a :href="lugar.mapURL">{{lugar.name}}</a> -->
  </b-card>

  
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
     fecha: String,
    teams: String,
    hora: String,
    lugar: String,
    mapa: String
   

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

