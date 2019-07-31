<template>
  <section class="button-container">
    <button @click="goBack">BACK</button>
    <button @click="goToNext">NEXT</button>
  </section>
</template>

<script>
export default {
  name: 'ButtonContainer',
  methods: {
    goToNext() {

    },
    goBack() {

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
    font-size: 1.25em;
    padding: 15px 20px;

    &:hover {
      color: #000000;
      background: #FFFFFF;
    }
  }
}
</style>
