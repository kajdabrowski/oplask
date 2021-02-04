<template>
    <div class="img-gallery" >
      <div class="container" v-for="(item) in imgList" :key="item.id">
        <img @click="imgNav(item)" :src="item.urls.small" :alt="item.alt_description" />
        <button @click="like(item)" class="heart" :class="{ liked:liked.find(element => element.id === item.id)}"></button>
      </div>
    </div>
</template>

<script>
export default {
  data() { 
    return {
      liked: [],
  }},
  methods: {
    like(item) {
      !this.liked.find(element => element.id === item.id) ? this.liked.push(item) : this.liked = this.liked.filter(e => e.id != item.id)
      localStorage.setItem('liked', JSON.stringify(this.liked))
    },
    imgNav(item) {
      this.$router.push("SingleImg/" + item.id)
    }
  },
  props: {
    imgList: Array,
  },
  created() {
    if (localStorage.getItem("liked")) {
      this.liked = JSON.parse(localStorage.getItem("liked"))
    }
  }
}
</script>

<style lang="scss">


.container {
  position: relative;
  button {
    position: absolute;
    bottom: 8px;
    right: 16px;
    font-size: 12px;
    border: none;
  }
}

.heart {
    background-color: grey;
  display: inline-block;
  height: 25px;
  margin: 10px 10px;
  position: relative;
  transform: rotate(-45deg);
  width: 25px;
}

.heart:before,
.heart:after {
  content: "";
  background-color: grey;
  border-radius: 50%;
  height: 25px;
  position: absolute;
  width: 25px;
}
.liked, .liked:before, .liked:after {
    background-color: red;
}

.heart:before {
  top: -15px;
  left: 0;
}

.heart:after {
  left: 15px;
  top: 0;
}

</style>