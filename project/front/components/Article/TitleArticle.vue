<script setup lang="ts" >
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  htag: {
    type: String,
    default:'2',
  },
});
</script>
<template>
  <div class="container-title-article">
    <h2 v-if="htag === '2'" class="title-destacados">{{title}}</h2>
    <h3  v-if="htag === '3'" class="title-destacados">{{title}}</h3>
    <h4  v-if="htag === '4'" class="title-destacados">{{title}}</h4>
    <p class="p-destacados">{{ description }} </p>
  </div>
</template>

<style scoped lang="scss">
.container-title-article{
  display: flex;
  flex-direction: column;
}
.title-destacados {
  text-align: center;
}

.p-destacados {
  width: 90%;
  margin: auto;
}
</style>