<template>
  <article class="thumbnail">
    <img
      :src="art.imageurl"
    />
  </article>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    art: Object,
  },
};
</script>

<style lang="scss">
.thumbnail {
  margin: 15px;
  img {
    border: 4px solid black;
    height: 400px;
    width: 400px;
    object-fit: cover;
  }
}

@media screen and (max-width: 320px) {
  .thumbnail {
    img {
      height: 250px;
      width: 250px;
    }
  }
}
</style>
