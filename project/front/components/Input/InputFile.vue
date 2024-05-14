<script lang="ts" setup>
import { ref, defineProps, defineEmits, withDefaults } from 'vue';
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
        type: String,
        default: "",
    }
});
let inputValue = ref(props.modelValue);
const updateModelValue = (e: any) => {
    inputValue.value = e.target.value;
    emit('update:modelValue', inputValue.value);
};
//
const emit = defineEmits(['update:modelValue',"change"]);
function onInputChange(e: any) {
    console.log("test",e.target.value);
    const files = e.target.files;
    console.log(files);
    // botonSubirArquivos.value = addFiles(allowedFiles.value, e.target.files);
    // e.target.value = null;
    inputValue.value = e.target.value;
    emit('update:modelValue', inputValue.value);
}
</script>
<template>
    <div class="container-input-file">
        <div class="container-input-basic">
            <label :for="idInput">{{ label }}:</label>
            <input id="file-upload" class="btn btn-outline-info file-input" type="file"  @change="onInputChange" />
        </div>
        <div class="container-input-basic">
            <label :for="idInput">Título para la imagen:</label>
            <input
                type="text"
                v-model="inputValue"
                ref="chipInput"
                @input="updateModelValue"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.container-input-file{
    display:flex;
    gap: .5rem;
}
.container-input-basic{
    display:flex;
    flex-direction: column;
    flex: 1;
    gap: .5rem;
}
.file-input {
    font-weight: bold;
    text-align: center;
}
</style>