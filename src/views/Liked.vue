<template>
  <main class="flex-container">
    <div class="img-gallery">
      <div
        class="containerLiked"
        v-for="item in likedImg"
        :key="item.id"
      >
      <img :src="item.urls.small" alt="" />
      </div>
    </div><router-link class="button" to="/">Go back to Home</router-link>
  </main>
</template>

<script>
export default {
  data() {
    return {
      likedImg: [],
    }
  },
  created() {
    this.likedImg = JSON.parse(localStorage.getItem("liked"))
  },
}
</script>
    
<style lang="scss">

.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  .button {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}



</style>