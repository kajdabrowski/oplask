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
    <a href="#" class="button" @click="searchQuery" type="submit" value="submit">Search</a>
    <a href="#" class="button" @click="randomImages" type="submit" value="submit">Random</a>
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
    border: 0.7rem solid black;
    background: #fff;
  }
  }

}

@media screen and (max-width: 992px) {
.searchwrapper {
  div {
        label {
            margin-bottom: 0.5rem;
            font-size: 1rem;
  }
    input {
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 0.35rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 4px;
    border: 0.15rem solid black;
    background: #fff;
  }
  }
}
}
@media screen and (max-width: 500px) {
.searchwrapper {
  div {
        label {
            margin-bottom: 0.5rem;
            font-size: 1.0rem;
  }
    input {
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 0.20rem 0.3rem;
    font-size: 0.6rem;
    border-radius: 2px;
    border: 0.10rem solid black;
    background: #fff;
  }
  }
}
}
</style>