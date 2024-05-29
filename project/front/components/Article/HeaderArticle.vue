<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
    typeArticle: {
        type: String,
        default: "Articulo",
    },
    tags: {
        type: Array,
        default: ["tag1", "tag2"],
    },
    titleArticle: {
        type: String,
        default: "Nuevo Articulo",
    },
    imgAuthor: {
        type: String,
        default: "https://i.blogs.es/8eaa43/goku-day-dragon-ball/1200_800.jpeg",
    },
    nameAuthor: {
        type: String,
        default: "Mauricio",
    },
    // modelValue: {
    //     type: String,
    //     default: "",
    // }
});

function obtenerFechaEnFormatoDiaMesAno(): string {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0 (Enero)
    const anio = fecha.getFullYear();
    return `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${anio}`;
}
</script>
<template>
    <div class="mini-article-subhead">
        <div class="container-date">
            <span>{{ typeArticle }}</span>
            <time datetime="2020-01-28">{{ obtenerFechaEnFormatoDiaMesAno() }}</time>
        </div>
        <div class="tags">
            <a v-for="item in tags" href="#" rel="tag">{{ item }}</a>
        </div>
    </div>
    <div class="container-article-meta">
        <h2 class="article-title">
            <a href="#" class="article-card-header read-article"> {{ titleArticle }}</a>
        </h2>
        <div class="mini-article-meta">
            <div class="mini-article-byline">
                <div class="author-avatar">
                    <a class="author-name" href="#">
                        <img alt=""
                             :src="imgAuthor"
                             class="avatar avatar-80 photo jetpack-lazy-image jetpack-lazy-image--handled"
                             height="80" width="80"
                             srcset="https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&amp;d=retro&amp;r=pg  2x"
                             data-lazy-loaded="1">
                    </a>
                </div>
                <div class="author-name-area">
                    <div class="author-name-prefix">Autor</div>
                    <a class="author-name" href="#">{{ nameAuthor }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container-date{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
.article-title {
    //color: linear-gradient(90deg, #ff8a00, 60%, #e52e71);
    margin: auto 0 !important;
}

.container-article-meta {
    display: flex;
    justify-content: space-between;
}

.article-title {
    //color: linear-gradient(90deg, #ff8a00, 60%, #e52e71);
    margin: auto 0 !important;
}

.mini-article-subhead {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    //margin: 0 0 1rem;
}

.mini-article-card-header {
    margin-bottom: auto;
}

.mini-article-meta {
    font-size: 14px;
}

.mini-article-meta .author-name {
    display: block;
    position: relative;
}

.mini-article-meta .author-avatar img {
    width: 40px;
    height: 40px !important;
}

.mini-article-meta .author-avatar .half-circle {
    width: 60px;
    height: 48px;
}

.mini-article-byline {
    //margin: 3rem 0 0;
    display: grid;
    grid-template-columns: 75px 1fr;
    -webkit-box-align: center;
    align-items: center;
}

.mini-article-byline .author-avatar,
.mini-article-byline .author-name-area {
    grid-area: auto;
}


.tags {
    //margin: 1rem 0 2rem;
    //padding: .5rem 0 1rem;
    line-height: 2;
}

@media (max-width: 800px) {
    .tags {
        margin: 0;
    }
}

.tags a {
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    white-space: nowrap;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .2rem .85rem .25rem;
}

.tags a:focus,
.tags a:hover {
    color: #03a9f4;
    border-color: #fff;
    position: relative;
}


.author-avatar {
    grid-area: avatar;
    align-self: start;
    position: relative;
}

.author-avatar img {
    border-radius: 50%;
    width: 60px;
    height: 60px !important;
    display: block;
    overflow: hidden;
    margin: 16px 10px;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}

.author-avatar .half-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 56px;
    fill: none;
    stroke: url(https://css-tricks.com/wp-content/themes/CSS-Tricks-17/style.css?cache_bust=1580767355603#orange-to-pink);
    stroke-width: 8;
    stroke-linecap: round;
    pointer-events: none;
}

.author-name-area {
    grid-area: author;
}

.author-name-prefix {
    //font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
}

.module {
    clear: both;
    margin: 0 0 1rem;
    position: relative;
}

.module > :last-child,
.module > :last-child > :last-child {
    margin-bottom: 0;
}

@media (max-width: 800px) {
    .author-avatar img {
        width: 35px;
        height: 35px !important;
    }

    .author-avatar .half-circle {
        width: 55px;
        height: 40px;
    }
}

</style>