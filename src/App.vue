<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input:focus, button:focus {
    outline: none;
}
.button {
    height: fit-content;
    width: fit-content;
    text-decoration: none;
    color: black;
    padding: 1rem 4rem;
    margin: 0 5rem;
    font-size: 2rem;
    border-radius: 20px;
    border: 0.2rem solid black;
    background: #fff;
    transition: 0.5s;
    cursor: pointer;
}
.button:hover {
    color: white;
    border: 0.2rem solid black;
    background: black;
}

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

</style>