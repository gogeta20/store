<script setup lang="ts">
import InputBasic from "~/components/Input/InputBasic.vue";
import HeaderArticle from "~/components/Article/HeaderArticle.vue";

import PostController from '~/src/main/application/controller/PostController';

const dataPost = ref({
    title: '',
    tags: '',
    author: '',
    images: '',
    titleImages: '',
    content: '',
});

function sendData(): void {
    const post = {
        title: "primer envio post",
        content: "primer envio post",
        author: "primer envio post",
        date: new Date(),
        images: ["primer envio post"],
        tags: ["primer envio post"]
    };

    PostController.createPost(post)
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
    </div>
</template>
<style scoped lang="scss">
.container-article-meta {
    display: flex;
    justify-content: space-between;
}

.container-article-main {
    color: var(--text-color-bg-dark);
    width: 90%;
    margin: 2rem auto;
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
    -webkit-transition: .2s;
    transition: .2s;
    margin: 0;
}

.mini-card h2 {
    font-size: 20px;
    margin: .25rem 0 auto;
}

.mini-card:hover ~ .mini-card {
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

    .mini-card:hover ~ .mini-card {
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

    .mini-card:hover ~ .mini-card {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        -webkit-animation-duration: .01ms !important;
        animation-duration: .01ms !important;
        -webkit-animation-iteration-count: 1 !important;
        animation-iteration-count: 1 !important;
        -webkit-transition-duration: .01ms !important;
        transition-duration: .01ms !important;
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
