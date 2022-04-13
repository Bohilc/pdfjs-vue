<template>
  <div id="app">
    <Pdf msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Pdf from "@/components/Pdf";

export default {
  name: 'App',
  components: {
    Pdf
  }
}
</script>

<style>
body {
  /*height: 100vh;*/
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
