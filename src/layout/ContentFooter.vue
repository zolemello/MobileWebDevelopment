<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}"><img src="D:\Full Stack\MobileWebDevelopment\public\img/home.png">Home</img></router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin/calendar'}">Calendar</router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin/game-info'}">Game Info</router-link>
          </li>
          <li>
            <router-link :to="{path:'/admin/extras'}">Extras</router-link>
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

</style>
