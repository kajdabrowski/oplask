<template>
<div>
  <GALLERY :imgList="data"/>
</div>
</template>

<script>
import GALLERY from "@/components/Gallery.vue"
import * as API from "@/API"
export default {
  components: {
    GALLERY
  },
  data() {return {
    data: [],
  }},
  async created() {
    this.data = await API.getData('photos/random?count=9&client_id=Z7a2U_EBEcad41Fk_Uv7BpN6QzK8pecRDaqGa2ZSrJQ')
  }
}
</script>

<style>

</style>