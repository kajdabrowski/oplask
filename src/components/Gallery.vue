<template>
  <div class="img-gallery">
    <div class="container" v-for="item in imgList" :key="item.id">
      <img @click="imgNav(item)" :src="item.urls.small" alt="" />
      <button @click="like(item)" class="heart" :class="{ liked:liked.find(element => element.id === item.id)}"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgList: Array,
  },
  data() {return{
      test: true,
      liked: []
  }},
  methods: {
      like(item) {
          if (!this.liked.find(element => element.id === item.id)) {
              this.liked.push(item)         
          } else {
              this.liked.splice(this.liked.indexOf(item), 1)
          }
          
        // console.log(localStorage.getItem('liked'))
         /* if (localStorage.getItem('liked') == "Tom") {
            localStorage.removeItem('liked')
            
            this.test = !this.test

          } else {
            console.log(item)
            localStorage.setItem('liked', 'Tom')
            this.test = !this.test

          }*/
      },
    imgNav(item) {
      this.$router.push("SingleImg/" + item.id)
    }
  }, watch: {
        liked(value) {
            localStorage.setItem('liked', JSON.stringify(value))
        }
    }, beforeCreate() {
        this.liked = JSON.parse(localStorage.getItem("liked"))
        //console.log(this.liked)
        //console.log(JSON.parse(localStorage.getItem("liked")))
        // watch & before create ger rätt värde, men visar inte rött hjärta
    }
}
</script>

<style lang="scss">
.img-gallery {
  display: grid;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: repeat(3, 20rem);
  gap: 0.2rem;
  cursor: pointer;
  div {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
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