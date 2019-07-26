<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
          <router-link :to="{path:'/admin'}"> <img src='img\home.png' height="70px" width="70px"></router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin'}"><img src='img\calendar.png' height="70px" width="70px"></router-link>
          </li>
          <li>
          <router-link :to="{path:'/admin/game-info'}"> <img src='img\game info.png' height="70px" width="70px" > </router-link>
          </li>
          <li>
          <router-link :to="{path:'/admin'}">  <img src='img\extras.png' height="70px" width="70px"></router-link>
          </li>
        </ul>
      </nav>
     <!-- <div class="copyright text-center">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://binarcode.com" target="_blank">BinarCode</a>.
        Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
      </div> -->
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
  
}

.footer{
 height: 100px;
 background-color: #3c5166;
 border-spacing: 1px;
 position:static;
 
 
}

.container-fluid{
align-content: center;

}

</style>
