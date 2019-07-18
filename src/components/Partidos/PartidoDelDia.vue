<template>
  <button type="button" class="btn btn-primary btn-lg btn-block">
    <div class="row">
      <div class="col-3">{{fecha}}</div>
      <div class="col-3">{{local}} vs. {{visitante}}<p>{{lugar}}</p></div>
      <div class="col-3">{{hora}}</div>
    </div>
  </button>
</template>

<script>
	export default {
    props: {
      fecha: String,
      local: String,
      visitante: String,
      lugar: String,
      hora: String
    },
		name: "PartidoDelDia"
	}
</script>

<style scoped>
  .btn-primary{
    background-image: linear-gradient(#611, #A33, #611);
    border-radius: 0;
    border-color: white;
  }
</style>
