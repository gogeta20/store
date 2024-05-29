<script setup>
import New from "~/components/Article/New.vue";
import TitleArticle from "~/components/Article/TitleArticle.vue";
</script>
<template>
  <div class="container-destacados">
    <TitleArticle title="Noticias destacadas"></TitleArticle>
    <div class="popular-articles">
      <div class="mini-card-grid">
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
        <New></New>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-destacados {
  border: solid;
  border-radius: 15px;
  width: 98%;
  margin: 5rem auto;
}

.title-destacados {
  text-align: center;
}

.p-destacados {
  width: 90%;
  margin: auto;
}

.popular-articles {
  //border: solid;
  //border-radius: 1rem;
  /* background: var(--purple-light); */
  box-sizing: content-box;
  display: -webkit-box;
  display: flex;
  //width:98%;
  margin: auto;
  padding: 2rem 0;
}

@media (max-width:1200px) {
  .popular-articles {
    //scrollbar-color: #201c29;
    //scrollbar-width: 10px;
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: 6rem;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    //-ms-scroll-snap-points-x: repeat(250px);
    //scroll-snap-points-x: repeat(250px);
    -ms-scroll-snap-type: mandatory;
    //scroll-snap-type: mandatory;
  }

  .popular-articles::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .popular-articles::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
  }

  .popular-articles .mini-card {
    scroll-snap-align: start;
  }
}

@media (max-width:1200px) {
  .popular-articles {
    padding-left: 0;
  }
}
.mini-card-grid {
  //scrollbar-gutter:;
  padding: 3rem;
  display: -webkit-box;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width:1200px) {
  .mini-card-grid {
    overflow-x: visible;
  }
}

.mini-card-grid::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

.mini-card-grid::-webkit-scrollbar-button {
  width: 48px;
  height: 48px;
}

.mini-card-grid::-webkit-scrollbar-thumb {
  background: var(--purple-second);
  border: 0px none var(--light-purple-bg);
  border-radius: 12px;
}

.mini-card-grid::-webkit-scrollbar-thumb:hover {
  background: var(--purple-second);
  //background: #1cd511;
}

.mini-card-grid::-webkit-scrollbar-thumb:active {
  background: var(--purple-second);
}

.mini-card-grid::-webkit-scrollbar-track {
  background: var(--light-purple-bg);
  border: 0px dotted var(--light-purple-bg);
  border-radius: 47px;
}

.mini-card-grid::-webkit-scrollbar-track:hover {
  background: var(--light-purple-bg);
}

.mini-card-grid::-webkit-scrollbar-track:active {
  background: var(--light-purple-bg);
}

.mini-card-grid::-webkit-scrollbar-corner {
  background: transparent;
  //background: #1cd511;
}
</style>
