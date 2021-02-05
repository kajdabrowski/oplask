<template>
  <main class="flex-container">
    <div class="img-gallery">
      <div class="gallery-container" v-for="item in likedImg" :key="item.id">
        <img :src="item.urls.small" alt="" />
        <button
          @click="like(item)"
          class="heart"
          :class="{ liked: likedImg.find((element) => element.id === item.id) }"
        ></button>
      </div>
    </div>
    <router-link class="button" to="/">Go back to Home</router-link>
  </main>
</template>

<script>
export default {
  data() {
    return {
      likedImg: [],
    };
  },
  created() {
    this.likedImg = JSON.parse(localStorage.getItem("liked"));
  },

  methods: {
    like(item) {
      !this.likedImg.find((element) => element.id === item.id)
        ? this.likedImg.push(item)
        : (this.likedImg = this.likedImg.filter((e) => e.id != item.id));
      localStorage.setItem("liked", JSON.stringify(this.likedImg));
    },
  },
};
</script>
    
<style lang="scss">
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  .img-gallery {
    margin-top: 2rem;
  }
  .button {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>