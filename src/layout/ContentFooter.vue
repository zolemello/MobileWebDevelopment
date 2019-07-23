<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
          <router-link :to="{path:'/admin'}"> <img src='img\home.png'></router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin/calendar'}"><img src='img\calendar.png'></router-link>
          </li>
          <li>
          <router-link :to="{path:'/admin/game-info'}"> <img src='img\game info.png'></router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin/extras'}"><img src='img\extras.png'></router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://binarcode.com" target="_blank">BinarCode</a>.
        Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

.footer-menu{
  
  font-size: 20px;
  font-weight: bold;
  color: yellowgreen;
 
 
}

.footer{
 height: 150px;
 background-color: #3c5166;
 
 
}

</style>
