<template>
    <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive">
            <template slot="header" >
              <h4 class="tituloTabla">Login</h4>
            
        </template>                
          
            
          </card>

        </div>
      </div>

    
    </div>
  </div>

        
        
</template>

<script>
import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  
  
  export default {
    components: {
      LTable,
      Card
    },
     
  } 

</script>

    <style>
            .header{
              color: red;
              font-family: Impact;
            }
          
          
            .button{
                text-align: center;
                color: white;
                background-color: rgb(15, 211, 32);
                 padding: 5px;
                 font-size: 18px;
                 font-family: Impact;
            }

            .strpied-tabled-with-hover {
  background-color: darkslategrey;
  align-content: center;
}

.tituloTabla {
  align-content: center;
  text-align: center;
  font-weight: bold; 
  color: black;
  font-size: 25px;
  
}

.subtituloTabla {
   align-content: center;
  text-align: center;
  font-style: italic;
  color: grey;
  font-size: 15px;
  
}

.textoContenido {
  font-size: 14px;
  color: black;
  text-align: center;
}
    </style>