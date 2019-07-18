<template>
  <button type="button" class="btn btn-primary btn-lg btn-block ">
    <div class="row">
      <div class="col-3" >{{fecha}}</div>
      <div class="col-3">{{teams}}</div>
      <div class="col-3">{{hora}}</div>
       <div class="col-3">{{lugar}}</div>
    </div>
  </button>
</template>

<script>
	export default {
    props: {
      fecha: String,
      teams: String,
      hora: String,
      lugar: String
    },
		name: "PartidoDelDia"
	}
</script>

<style scoped>
  .btn-primary{
   background-color: lightskyblue; 
   border-radius: 0;
   border-color: white;
   font-size: 15px;
   height: 60px; 
   color: darkblue;  
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font: Verdana; 
     
  }

</style>
