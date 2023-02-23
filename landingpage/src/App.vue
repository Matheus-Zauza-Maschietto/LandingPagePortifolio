<template>
  <div>
    <HeaderC/>
    <HomeC/>
  </div>
</template>

<script>
import HeaderC from "./components/Header.vue"
import HomeC from "./components/Home.vue"

export default {
  name: 'App',
  components: {
    HeaderC,
    HomeC
  }
}
</script>

<style>

</style>
