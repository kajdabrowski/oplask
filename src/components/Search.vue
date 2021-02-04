<template>
  <div class="searchwrapper">
    <div>
        <label>Search oplask</label>
        <input
            v-model="keyword"
            type="text"
            placeholder="Search..."
        />
    </div>
    <button class="button" @click="searchQuery" type="submit" value="submit">Search</button>
    <button class="button" @click="randomImages" type="submit" value="submit">Random</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    }
  },
  methods: {
    searchQuery() {
      if (this.keyword.length > 2) {
        this.$root.search(this.keyword, 1)
        this.$emit('change', this.keyword)
      }
    },
    randomImages() {
      this.$emit('click')
      this.$root.randomImages()
    }
  },
}
</script>

<style lang="scss">
.searchwrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0, 2rem;
  div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
        label {
            margin-bottom: 0.5rem;
            font-size: 1rem;
  }
    input {
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 0.15rem solid black;
    background: #fff;
  }
  }

}

</style>