<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
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
.gallery-container{
  position: relative;
  button {
    position: absolute;
    bottom: 8px;
    right: 16px;
    font-size: 12px;
    border: none;
  }
}
.img-gallery {
  display: grid;
  grid-template-columns: repeat(3, 20rem);
  grid-auto-rows: 20rem;
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
@media screen and (max-width: 992px) {
.img-gallery {
  grid-template-columns: repeat(3, 10rem);
  grid-auto-rows: 10rem;
  gap: 0.2rem;
}
.button {
    padding: 0.4rem 1.4rem;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 0.2rem solid black;
}
}
@media screen and (max-width: 500px) {
.img-gallery {
  grid-template-columns: repeat(3, 5rem);
  grid-auto-rows: 5rem;
  gap: 0.2rem;
}
.button {
    padding: 0.15rem 0.35rem;
    font-size: 0.7rem;
    border-radius: 4px;
    border: 0.07rem solid black;
}
.heart {
  height: 10px;
  margin: 4px 4px;
  transform: rotate(-45deg);
  width: 10px;
}
.heart:before,
.heart:after {
  content: "";
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
.heart:before {
  top: -6px;
  left: 0;
}
.heart:after {
  left: 6px;
  top: 0;
}

}
</style>