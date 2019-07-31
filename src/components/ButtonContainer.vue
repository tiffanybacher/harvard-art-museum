<template>
  <section class="button-container">
    <button @click="loadMore">LOAD MORE</button>
    <button @click="goToTop">BACK TO TOP</button>
  </section>
</template>

<script>
export default {
  name: 'ButtonContainer',
  props: {
    currentPage: Number,
    fetchNextPage: Function,
  },
  methods: {
    loadMore() {
      const nextPage = this.currentPage + 1;
      this.fetchNextPage(nextPage);
    },
    goToTop() {
      window.scrollTo(0,0);
    },
  },
};
</script>

<style lang="scss">
.button-container {
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    color: #FFFFFF;
    background: #000000;
    border: 4px solid black;
    font-weight: 800;
    font-size: 1.1em;
    margin: 10px auto;
    padding: 12px;
    width: 60%;

    &:hover {
      color: #000000;
      background: #FFFFFF;
    }
  }
}
</style>
