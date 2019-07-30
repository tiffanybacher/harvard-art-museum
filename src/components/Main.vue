<template>
  <main class="main">
    <img 
      v-for="art in displayedArt"
      :key="art.id"
      :src="art.imageurl"
    />
  </main>
</template>

<script>
import fetchArt from '../api/fetchArt';

export default {
  name: 'Main',
  async created() {
    this.displayedArt = await fetchArt();
  },
  data() {
    return {
      displayedArt: {},
    }
  },
};
</script>

<style lang="scss">
.main {

}
</style>
