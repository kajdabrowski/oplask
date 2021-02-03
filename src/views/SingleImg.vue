<template>
  <div class="singleImg">
    <router-link to="/">Tillbaka</router-link>
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    img() {
      return this.$root.getSingleImg(this.$route.params.id).urls.full;
    },
  },
};
</script>

<style lang="scss">
.singleImg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 75%;
  }
  a {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 2rem;
    font-size: 2rem;
    border-radius: 4rem;
    border: 0.2rem solid black;
  }
  a:hover {
    color: white;
    border: 0.2rem solid black;
    background: black;
  }
}
</style>