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

</script>
<template>
    <div class="container-input-basic">
        <label :for="idInput">{{ label }}:</label>
        <input
            :id="idInput"
            type="text"
            v-model="inputValue"
            ref="chipInput"
            @input="updateModelValue"
        />
    </div>
</template>
<style scoped lang="scss">
.container-input-basic{
    display:flex;
    flex-direction: column;
    gap: .5rem;
}
//div {
//    width: 100%;
//    display: grid;
//    grid-template-columns: repeat(8, 1fr);
//    //grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
//    grid-template-rows: 1fr;
//    grid-column-gap: 0px;
//    grid-row-gap: 0px;
//}
//
//input { grid-area: 1/2/2/9; }
</style>