<template>
  <div id="home" class="col-12">
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
    height: 100vh;
}
</style>