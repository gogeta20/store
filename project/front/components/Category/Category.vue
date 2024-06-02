<script setup lang="ts">
import TitleArticle from '~/components/Article/TitleArticle.vue';
import { ref, defineProps } from 'vue';
const props = defineProps({
  idInput: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [],
  },
});
const emit = defineEmits(['update:modelValue', "change"]);
const categoryList = ref([
  { id: 'cat-0', name: 'uno' },
  { id: 'cat-1', name: 'dos' }
]);
const filesList = ref([{ id: '', name: '-' }]);
let selected: any = ref();

const selectedCategory = () => {
  filesList.value.push(selected.value);
  emit('update:modelValue', filesList.value);
};

const deleteItemCategory = (e: any) => {
  const idInput = e.target.id;
  const indexFound = filesList.value.findIndex((element) => element.id === idInput);
  if (indexFound !== -1) {
    filesList.value.splice(indexFound, 1);
  }
};
onMounted(() => {
  filesList.value.splice(0, 1);
})
</script>
<template>
  <div class="container-blue">
    <div class="container-category">
      <div class="container-input-basic container-input-category">
        <label for="">Categorias:</label>
        <select id="selectedCategory" v-model="selected">
          <option v-for="n in categoryList" :value="n">{{ n.name }}</option>
        </select>
      </div>
      <div class="">
        <button class="btn btn-outline-info" @click="selectedCategory">
          <i class="fa-solid fa-plus"></i>
          <!-- Seleccionar -->
        </button>
      </div>
    </div>

    <div class="container-input-basic selected-categories">
      <label for="">Seleccionadas:</label>
      <div v-for="n, k in filesList" class="btn-minus-category">
        {{ n.name }}
        <button class="btn btn-outline-info fa-solid fa-minus" :id="n.id" @click="deleteItemCategory"></button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-input-category {
  width: 90%;
}

.selected-categories {
  margin-top: 1rem;
  border-top: solid var(--light-purple-bg) 1px;
  padding-top: 1rem;
}

.container-category {
  display: flex;
  align-items: end;
  gap: .5rem;
}

.btn-minus-category {
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem
}

.btn-minus-category button {
  max-height: 2rem;
}
</style>
