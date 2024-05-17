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
</style>