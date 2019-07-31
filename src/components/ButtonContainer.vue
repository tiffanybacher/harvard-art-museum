<template>
  <section class="button-container">
    <button @click="loadMore">LOAD MORE</button>
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
  },
};
</script>

<style lang="scss">
.button-container {
  display: flex;
  justify-content: space-around;
  width: 100%;

  button {
    color: #FFFFFF;
    background: #000000;
    border: 4px solid black;
    font-weight: 800;
    font-size: 1.1em;
    padding: 12px;
    width: 60%;

    &:hover {
      color: #000000;
      background: #FFFFFF;
    }
  }
}
</style>
