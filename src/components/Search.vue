<template>
  <div class="searchwrapper">
    <div>
        <label>Search oplask </label>
        <input
            v-model="keyword"
            type="text"
            placeholder="Search..."
        />
    </div>
    <button @click="checkQuery" type="submit" value="submit">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },

  methods: {
    checkQuery() {
      if (this.keyword.length > 2) {
        this.$root.search(this.keyword);
      }
    },
  },
};
</script>

<style lang="scss">
.searchwrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  margin-top: 5rem;
  margin-bottom: 5rem;
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
  button {
    display: flex; 
    justify-content: space-around;
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 1rem 4rem;
    font-size: 2rem;
    border-radius: 20px;
    border: 0.2rem solid black;
    background: #fff;
    transition: 0.5s;
    cursor: pointer;
  }
  button:hover {
    color: white;
    border: 0.2rem solid black;
    background: black;
  }

}

</style>