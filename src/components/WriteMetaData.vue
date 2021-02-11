<template>
  <div class="metainfo">
    <div>
      Likes: <b>{{ showLikes }}</b>
    </div>
    <div>
      Photographer: <b>{{ showPhotographer }}</b>
    </div>
    <div>
      Views: <b>{{ showViews }}</b>
    </div>
    <div>
      Downloads: <b>{{ showDownloads }}</b>
    </div>
    <a href="#" :src="this.imgData.links.download" download="foto.jpeg">Download image</a>
  </div>
</template>

<script>
export default {
  props: {
    imgData: Object,
  },

  computed: {
    showLikes() {
     return this.imgData.likes ? this.imgData.likes : 0
    }, 
    showViews() {
      return this.imgData.views ? this.imgData.views : 0
    },
    showDownloads() {
      return this.imgData.downloads ? this.imgData.downloads : 0
    },
    showPhotographer() {
      console.log(this.imgData.links.download)
      return this.imgData.user.name ? this.imgData.user.name : 'Unknown'
    }
  },
  methods: {
    downloadImg() {
      return this.imgData.links.download
    }
  }
};


</script>

<style>
.metainfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: black;
  padding: 1rem 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  border-radius: 20px;
  border-right: 0.2rem solid black;
  border-left: 0.2rem solid black;
}
</style>