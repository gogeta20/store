<script setup lang="ts">
import { ref, defineProps } from 'vue';
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
const emit = defineEmits(['update:modelValue',"change"]);
let inputValue = ref(props.modelValue);

const categoryList = ref(['uno', 'dos']);
let selected = ref('');

const selectedCategory = () => {
    inputValue.value = selected.value;
    emit('update:modelValue', inputValue.value);
};
</script>
<template>
  <div class="container-blue">
    <div class="container-input-basic">
      <label for="">Etiquetas:</label>
      <select id="selectedCategory" v-model="selected">
        <option v-for="n in categoryList" :value="n">{{ n }}</option>
      </select>
    </div>
    <div class="mt-3">
      <button class="btn btn-outline-info" @click="selectedCategory">
        Seleccionar
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
