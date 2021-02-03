<template>
    <div class="container">
      <img @click="imgNav(item)" :src="item.urls.small" alt="" />
      <button @click="like(item)" class="heart" :class="{ liked:heartColor}"></button>
    </div>
</template>

<script>
export default {
    computed: {
        haertColort() {
            if (this. )
        }
    }
}
</script>

<style>

</style>