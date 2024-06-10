<script setup lang="ts">
import InputBasic from '~/components/Input/InputBasic.vue';
import HeaderArticle from '~/components/Article/HeaderArticle.vue';

import CreateArticleController from '~/src/main/application/controller/CreateArticlePostController';
import type { Article } from '~/src/main/domain/entity/Article';

import { userAppStore } from '~/stores/user';
import Category from '~/components/Category/Category.vue';
import Tag from '~/components/Tag/Tag.vue';
const userStore = userAppStore();
const toastStore = toastAppStore();

const dataPost = ref({
  title: '',
  tags: [''],
  author: 0,
  images: [''],
  files: [],
  content: '',
  category: '',
});

function sendData(): void {
  let filesArray: any = [];
  let imagesArray: any = [];

  dataPost.value.images.forEach((element:any) => {
    if (element.files && element.files.length > 0) {
      filesArray.push(element.files[0]);
      imagesArray.push({ id: element.id, name: element.name, path: element.path });
    }
  });

  const article: Article = {
    title: dataPost.value.title,
    tags: dataPost.value.tags,
    author: userStore.getId(),
    files: filesArray,
    images: imagesArray,
    content: dataPost.value.content,
    category: dataPost.value.category,
  };
  CreateArticleController.send(article);
}
</script>

<template>
  {{ dataPost }}
  <div class="container-article-main">
    <div class="mini-card module" id="mini-post-302186">
      <HeaderArticle></HeaderArticle>
      <div class="container-article-text">
        <InputBasic id-input="title" label="Título" v-model="dataPost.title"></InputBasic>
        <InputChips id-input="tags" label="Etiquetas" v-model="dataPost.tags"></InputChips>
        <InputFile id-input="file-form-new" label="Imagen" v-model="dataPost.images"></InputFile>
        <Editor id-input="content" label="Contenido" v-model="dataPost.content"></Editor>

        <button class="btn btn-outline-info" @click="sendData()">enviar</button>
      </div>
    </div>
    <!--  -->
    <div class="container-extra">
      <Category v-model="dataPost.category"></Category>
      <Tag v-model="dataPost.category"></Tag>
    </div>
  </div>

</template>
<style scoped lang="scss">
.container-extra {
  min-width: 200px;
}

.container-article-meta {
  display: flex;
  justify-content: space-between;
}

.container-article-main {
  color: var(--text-color-bg-dark);
  width: 90%;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
}

.container-article-text {
  margin: 1rem;
}

.mini-card {
  min-width: 300px;
  min-height: 350px;
  padding: 1.5rem;
  border-radius: 16px;
  background: var(--light-purple-base);
  //box-shadow:-1rem 0 1rem #1f1a2e;
  box-shadow: -1rem 2px 1rem 0px #1f1a2e;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  margin: 0;
}

.mini-card h2 {
  font-size: 20px;
  margin: 0.25rem 0 auto;
}

.mini-card:hover~.mini-card {
  -webkit-transform: translateX(130px);
  transform: translateX(130px);
}

@media (max-width: 1200px) {
  .mini-card {
    min-width: 220px;
  }

  .mini-card:not(:first-child) {
    margin-left: -30px;
  }

  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }

  .mini-card:hover~.mini-card {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
}

@media (max-width: 800px) {
  .mini-card {
    min-width: 190px;
  }

  .mini-card:not(:first-child) {
    margin-left: -10px;
  }

  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }

  .mini-card:hover~.mini-card {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    -webkit-animation-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  * {
    -webkit-transition: 0s !important;
    transition: 0s !important;
  }
}
</style>
