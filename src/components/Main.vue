<template>
  <main class="main">
    <p @click="showGalleryMenu">Sort by gallery <i :class="caratDirection"></i></p>
    <p @click="backToAll" v-if="galleryShown">Go Back to All</p>
    <div v-if="menuShown" class="gallery-menu">
      <div>
        <h3>Floor 1</h3>
        <div v-for="gallery in floor1" class="gallery-title" @click="fetchGallery(gallery.id)">
          <p class="main-title">{{ gallery.name }}</p>
          <p class="theme-title">{{ gallery.theme}}</p>
        </div>
      </div>
      <div>
        <h3>Floor 2</h3>
        <div v-for="gallery in floor2" class="gallery-title" @click="fetchGallery(gallery.id)">
          <p class="main-title">{{ gallery.name }}</p>
          <p class="theme-title">{{ gallery.theme}}</p>
        </div>
      </div>
      <div>
        <h3>Floor 3</h3>
        <div v-for="gallery in floor3" class="gallery-title" @click="fetchGallery(gallery.id)">
          <p class="main-title">{{ gallery.name }}</p>
          <p class="theme-title">{{ gallery.theme}}</p>
        </div>
      </div>
      <div>
        <h3>Floor 4</h3>
        <div v-for="gallery in floor4" class="gallery-title" @click="fetchGallery(gallery.id)">
          <p class="main-title">{{ gallery.name }}</p>
          <p class="theme-title">{{ gallery.theme}}</p>
        </div>
      </div>
    </div>
    <div class="thumbnail-container">
      <Thumbnail v-for="art in displayedArt" :art="art" :key="art.id" />
    </div>
    <ButtonContainer 
      :galleryShown="galleryShown"
      :currentPage="currentPage"
      :fetchNextPage="fetchNextPage" />
  </main>
</template>

<script>
import fetchArt from '../api/fetchArt';
import fetchGalleries from '../api/fetchGalleries';
import fetchGallery from '../api/fetchGallery';
import Thumbnail from './Thumbnail.vue';
import ButtonContainer from './ButtonContainer.vue';

export default {
  name: 'Main',
  created() {
    this.fetchNextPage(1);
    this.getGalleryInfo();
  },
  data() {
    return {
      displayedArt: [],
      currentPage: 0,
      caratDirection: 'fas fa-caret-right',
      menuShown: false,
      floor1: [],
      floor2: [],
      floor3: [],
      floor4: [],
      galleryShown: false,
    };
  },
  methods: {
    async fetchNextPage(page) {
      const fetchedArt = await fetchArt(page);

      this.displayedArt = [...this.displayedArt, ...fetchedArt];
      this.currentPage = this.currentPage + 1;
    },
    showGalleryMenu() {
      if (this.caratDirection === 'fas fa-caret-right') {
        this.caratDirection = 'fas fa-caret-down';
      } else {
        this.caratDirection = 'fas fa-caret-right';
      }

      this.menuShown = !this.menuShown;
    },
    async getGalleryInfo() {
      const galleries = await fetchGalleries();

      this.floor1 = galleries.filter(gallery => gallery.floor === 1);
      this.floor2 = galleries.filter(gallery => gallery.floor === 2);
      this.floor3 = galleries.filter(gallery => gallery.floor === 3);
      this.floor4 = galleries.filter(gallery => gallery.floor === 4);
    },
    async fetchGallery(id) {
      this.displayedArt = await fetchGallery(id);
      this.menuShown = false;
      this.caratDirection = 'fas fa-caret-right';
      this.galleryShown = true;
    },
    async backToAll() {
      const fetchedArt = await fetchArt(1);

      this.displayedArt = fetchedArt;
      this.galleryShown = false;
    },
  },
  components: {
    Thumbnail,
    ButtonContainer,
  },
};
</script>

<style lang="scss">
.gallery-menu {
  display: flex;
  justify-content: center;

  div {
    text-align: left;

    .gallery-title {
      cursor: pointer;
    }
  }

  .main-title {
    font-weight: 800;
  }
}

.thumbnail-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
}

@media screen and (max-width: 414px) {
  .thumbnail-container {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
