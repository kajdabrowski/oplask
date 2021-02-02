<template>
<div class="img-gallery">
    <img v-for="item in imgList" :key="item.id" @click="imgNav(item)" :src="item.urls.small" alt="">
</div>
</template>

<script>
export default {
    props: {
        imgList: Array
    }, methods: {
        imgNav(item) {
            // skicka till singleView
            console.log(item)
        }
    }
}
</script>

<style>

</style>