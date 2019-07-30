<template>
  <header class="header">
    <img alt="Vue logo" src="../assets/logo.png">
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 2%;

  img {
    height: 150px;
  }
}

@media screen and (max-width: 320px) {
  .header {
    img {
      height: 75px;
    }
  }
}
</style>
