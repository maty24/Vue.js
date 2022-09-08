<script>
import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'
   export default {
    name: 'App', //nombre del componenete
    components: {
      //Counter,
      Indecision
    }
   }
</script>

<template>
   <!--<Counter :start="100"/> envio el valor y le pongo : para trasformar -->
   <!--<Counter title="salieron"/>-->
   <Indecision />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
