<template>
  <div id="home" class="col-12 d-flex justify-content-center align-items-center p-5">
    <CardPerfilC/>
  </div>
</template> 
<script>
import CardPerfilC from './CardPerfil.vue'
export default {
    name: "HomeC",
    components: {
        CardPerfilC
    }
}
</script>

<style>
#home{
    background: #000;
    background-image: url(../assets/programming.jpg);
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>