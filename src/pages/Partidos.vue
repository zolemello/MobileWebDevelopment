
<template>

  <div>

    <ul class="sinPuntos">
      <li v-for="partido in partidos" v-bind:key="partido.id">
        <partido-del-dia v-bind="partido"/>
      </li>
    </ul>
    

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

    <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Last day
            </div>
          </stats-card>
    </div>

    <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div>
          </stats-card>
    </div>

    <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
    </div>

  </div>

  </div>

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

