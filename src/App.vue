<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
