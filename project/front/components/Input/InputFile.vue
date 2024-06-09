<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import type { FileImgList } from "~/src/main/domain/Notice";
const props = defineProps({
  idInput: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [],
  },
});
let modelValueCopy = ref(props.modelValue);
const count = ref(1);
const emit = defineEmits(["update:modelValue", "change"]);
const filesList: Ref<FileImgList[]> = ref([
  { id: '', name: '', path: '', files: [] }
]);

const addTitleFile = (e: any) => {
  let idInput = e.target.id;
  filesList.value.forEach(element => {
    if (element.id === idInput) {
      element.name = e.target.value
    }
  });
};

function addFile(e: any) {
  const files = e.target.files;
  if (!files) {
    return;
  }
  let nImg = filesList.value.length;
  let item = { id: 'img-' + nImg, name: '', path: e.target.value, files: files }

  filesList.value.push(
    item
  );
  emit("update:modelValue", filesList.value);
}

function imagesResolve(action: string) {
  if (action == "add") {
    count.value++;
  } else {
    if (count.value > 1) {
      count.value--;
    }
  }
}
</script>
<template>

  <div class="container-input-btns">
    <button @click="imagesResolve('add')" class="btn btn-outline-info">
      <i class="fa fa-plus"></i>
    </button>
    <button @click="imagesResolve('remove')" class="btn btn-outline-info">
      <i class="fa fa-minus"></i>
    </button>
  </div>

  <div class="container-input-file">
    <div class="container-input-basic">
      <label :for="idInput">{{ label }}:</label>
      <input v-for="n in count" id="file-upload" class="btn btn-outline-info file-input" type="file"
        @change="addFile" />
    </div>
    <div class="container-input-basic">
      <label>Título para la imagen:</label>
      <input class="input-images-name" v-for="n in count" :key="n" :id="'img-' + n" type="text" ref="chipInput"
        @input="addTitleFile" />
    </div>
  </div>

</template>
<style scoped lang="scss">
.input-images-name {
  margin: 0;
}

.container-input-file {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.container-input-basic {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
}

.container-input-btns {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 2rem;
}

.file-input {
  font-weight: bold;
  text-align: center;
}
</style>
