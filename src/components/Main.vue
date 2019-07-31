<template>
  <main class="main">
    <Thumbnail v-for="art in displayedArt" :art="art" :key="art.id" />
    <ButtonContainer :currentPage="currentPage" />
  </main>
</template>

<script>
import fetchArt from '../api/fetchArt';
import Thumbnail from './Thumbnail.vue';
import ButtonContainer from './ButtonContainer.vue';

export default {
  name: 'Main',
  created() {
    this.fetchArtByPage();
  },
  data() {
    return {
      displayedArt: {},
      currentPage: 1,
    };
  },
  methods: {
    async fetchArtByPage() {
      this.displayedArt = await fetchArt();
    },
  },
  components: {
    Thumbnail,
    ButtonContainer,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
}

@media screen and (max-width: 414px) {
  .main {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
