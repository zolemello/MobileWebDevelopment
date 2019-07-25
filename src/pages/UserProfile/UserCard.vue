<template>
  <card class="card-user">
    <img slot="image" src="img/fondo01.jpg" alt="..."/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="img/avatar.gif" alt="..."/>

        <h4 class="title">Soledad Mello<br />
          <small>zolemello</small>
        </h4>
      </a>
    </div>
    <p class="description text-center"> " Soy intelectual, muy inteligente   <br>
     .. soy intelectual, muy inteligente... <br>
      Ay, que bonito soy!"
    </p>
    <div slot="footer" class="text-center d-flex justify-content-center">
      <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-instagram"></i></button>
    </div>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      Card
    },
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
