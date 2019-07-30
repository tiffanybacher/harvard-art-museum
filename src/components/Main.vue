<template>
  <main class="main">

  </main>
</template>

<script>
import fetchArt from '../api/fetchArt.js';

export default {
  name: 'Main',
  created: function() {
    console.log('testing');
    
    fetchArt();
  }
};
</script>

<style lang="scss">
.main {

}
</style>
