<template>
  <div id="app" class="container">
    <cards></cards>
  </div>
</template>

<script>
import Cards from './components/Cards'

export default {
  name: 'app',
  components: {
    Cards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 800px;
  margin: 40px auto;
}

.card-type {
  background-color: rgb(230, 126, 34);
}

.column-card {
  padding: 6px;
  border: 1px dotted #ccc;
  margin: 6px 0;
  background-color: #efefef;
  color: #333;
}

.card-title {
  font-weight: thin;
  padding: 4px 0;
}

.card-owner {
  font-style: italic;
}

</style>
