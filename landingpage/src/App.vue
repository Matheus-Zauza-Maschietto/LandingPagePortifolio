<template>
  <div id="root">
    <HeaderC/>
    <HomeC/>
    <hr>
    <SobreC/>
    <hr>
    <HabilidadesC/>
    <hr>
  </div>
</template>

<script>
import HeaderC from "./components/Header.vue"
import HomeC from "./components/Home.vue"
import SobreC from "./components/Sobre.vue";
import HabilidadesC from "./components/Habilidades.vue"

export default {
  name: 'App',
  components: {
    HeaderC,
    HomeC,
    SobreC,
    HabilidadesC
  }
}
</script>

<style>
#root{
  background: #1E1E1E;
}

#home, #sobre, #habilidades{
  min-height: 100vh;
  padding-top: 80px;
}

.brightness{
  box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.3);
}

ul{
  list-style: none;
}

hr{
  color: white;
  background: white;
  height: 5px;
  margin: 0!important;
}
</style>
