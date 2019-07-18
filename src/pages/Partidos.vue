
<template>

  <div>
    <ul class="sinPuntos">
      <li v-for="partido in partidos">
        <partido-del-dia v-bind="partido"/>
      </li>
    </ul>

  </div>
</template>

<script>
  import PartidoDelDia from '../components/Partidos/PartidoDelDia'
	export default {
    data() {
      return {
        partidos:[
          {
            fecha: "09/14",
            local: "Boca",
            lugar: "Jose Amalfitani",
            visitante: "River",
            hora: "09:30"
          },{
            fecha: "10/14",
            local: "Spurs",
            lugar: "Jose Amalfitani",
            visitante: "Liverpol",
            hora: "09:30"
          },{
            fecha: "01/14",
            local: "San Lorenzo",
            lugar: "Jose Amalfitani",
            visitante: "River",
            hora: "09:30"
          },{
            fecha: "09/15",
            local: "Huracan",
            lugar: "Jose Amalfitani",
            visitante: "Sacachispas",
            hora: "09:30"
          },{
            fecha: "02/14",
            local: "Ferro",
            lugar: "Jose Amalfitani",
            visitante: "River",
            hora: "09:30"
          }]
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

