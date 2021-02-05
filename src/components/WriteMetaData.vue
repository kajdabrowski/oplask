<template>
  <div class="metainfo">
    <div>
      Likes: <b>{{ imgData.likes }}</b>
    </div>
    <div>
      Photographer: <b>{{ imgData.user.name }}</b>
    </div>
    <div>
      Views: <b>{{ imgData.views }}</b>
    </div>
    <div>
      Downloads: <b>{{ imgData.downloads }}</b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgData: Object,
  },
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