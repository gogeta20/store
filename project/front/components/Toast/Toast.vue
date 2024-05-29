<script lang="ts" setup>
import { ref, defineProps, defineComponent } from 'vue';
const toastStore = toastAppStore();

const props = defineProps({
  idInput: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  }
});
const visible = computed(() => {
  return toastStore.view;
});

const message = computed(() => {
  return toastStore.message;
});

const title = computed(() => {
  return toastStore.title;
});

const bg = computed(() => {
  return toastStore.class;
});



</script>
<template>
  <div v-if="visible" class="toast-list">
    <div class="toast">
      <div :class="bg">
        <div class="container-toast">
          <div class="toast-info__title">{{ title }}</div>
          <div class="toast-info__message">{{ message }}</div>
        </div>
        <div class="toast-info__data"><i class="fa-regular fa-circle-xmark"></i></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.toast-list {
  position: fixed;
  // position: absolute; // just for the demo
  top: 1em;
  right: 0;
}

.toast {
  min-width: 20em;
  max-width: 30em;
  margin-bottom: 10%;
  display: flex;
  animation: appear .5s 1s backwards;
}

.toast-info {
  box-shadow: 0 5px 15px fade(black, 25%), 0 15px 30px fade(black, 15%);
  display: flex;
  // flex-direction: column;
  flex-grow: 1;
  padding: .5em 1em;
  position: relative;
  overflow: hidden;
  // background: #1b5faa;
  // background: linear-gradient(#1b5faa, #18579a);
  border-radius: 3px;
  color: #FFF;

  &.toast-info--error {
    background: #D31;
  }
}

.container-toast {
  display: flex;
  flex-direction: column;
  width: 95%;
}

.toast-info__title {
  margin-bottom: .1em;
  padding: .2rem;
  font-weight: bold;
}

.toast-info__message {
  margin: .1em;
  flex-grow: 1;
}

.toast-action {
  text-align: center;
  display: flex;
  margin-top: 1em;
}

.toast-action__button {
  flex-grow: 1;
  padding: .5em 2em;
  border-radius: 2px;
  color: inherit;
  cursor: pointer;
  border: none;
  background: fade(white, 15%);
  margin: .2em;

  &:hover {
    background: fade(white, 20%);
  }

  &:active {
    background: fade(black, 15%);
  }

  &--primary {
    font-weight: bolder;
  }
}

.toast-info__data {
  font-size: 1.1rem;
  text-align: right;
  opacity: .5;
}

.toast-info__data i:hover {
  background: var(--resaltado-orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.toast__dismiss {
  align-self: center;
  font-size: 1.5em;
  margin: .25em;
}

.cancel-button {
  cursor: default;
  user-select: none;
  opacity: .25;

  &:after {
    content: '×';
  }

  &:hover {
    opacity: .75;
  }
}

.toast-info__timer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: fade(black, 40%);
  animation: timer 5s linear;
}

@keyframes timer {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 700px) {
  .wrapper {
    position: static;
    background: none;
    box-shadow: none;
  }
}
</style>
