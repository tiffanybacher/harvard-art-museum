<template>
  <main class="main">

  </main>
</template>

<script>
export default {
  name: 'Main',
  created: async function() {
    console.log('testing');

    const url = `https://api.harvardartmuseums.org/image?apikey=${process.env.API_KEY}`;

    await fetch(url)
      .then(response => response.json())
      .then(result => console.log(result))
  }
};
</script>

<style lang="scss">
.main {

}
</style>
