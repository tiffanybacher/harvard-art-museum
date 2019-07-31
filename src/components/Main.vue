<template>
  <main class="main">
   <!--  <img
      v-for="art in displayedArt"
      :key="art.id"
      :src="art.imageurl"
    /> -->
    <Thumbnail v-for="art in displayedArt" :art="art" :key="art.id" />
  </main>
</template>

<script>
import fetchArt from '../api/fetchArt';
import Thumbnail from './Thumbnail.vue';

export default {
  name: 'Main',
  async created() {
    this.displayedArt = await fetchArt();
  },
  data() {
    return {
      displayedArt: {},
    };
  },
  components: {
    Thumbnail,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2%;
}

@media screen and (max-width: 414px) {
  .main {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
