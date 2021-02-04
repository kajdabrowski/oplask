<template>
<div class="flex-container">
  <SEARCH />
  <GALLERY class="gallery" :imgList="data"/>
</div>
</template>

<script>
import SEARCH from "@/components/Search.vue"
import GALLERY from "@/components/Gallery.vue"
// import * as API from "@/API"
export default {
  components: {
    GALLERY, SEARCH
  },
  computed: {
    data() {
      return this.$root.getAllImg() 
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}


</style>