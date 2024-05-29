<script lang="ts" setup>
import {ref} from 'vue';

defineProps({
    idInput: {
        type: String,
        default: "",
    }
});
const chips = ref<string[]>([]);
const inputValue = ref('');
const chipAddition = '<button aria-label="remove this chip"><i class="fa-solid fa-xmark"></i></button>';
const dataLimit = ref<number | null>(null); // Set your limit here

function updateLimiter() {
    // Your logic for updating the limiter
}

function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function makeChip(chipValue: string) {
    chips.value.push(escapeHtml(chipValue));
    emit('update:modelValue', chips.value);
    updateLimiter();
}
const emit = defineEmits(["update:modelValue"]);
function removeChip(index: number) {
    chips.value.splice(index, 1);
    updateLimiter();
}

function focusInput() {
    const inputElement = ref('chipInput');
    if (inputElement) {
        inputElement.value?.focus();
    }
}

function handleInput(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Tab' || event.key === ',') {
        event.preventDefault();

        let value = inputValue.value;

        if (event.key === ',') {
            value = value.slice(0, -1);
        }

        const matches = chips.value.filter((chip) => chip.replace(/\s/g, '') === escapeHtml(value.replace(/\s/g, ''))).length;

        if (matches === 0 && value.replace(/\s/g, '').length > 0) {
            if (dataLimit.value === null || chips.value.length !== dataLimit.value) {
                makeChip(value);
            }
        }
        inputValue.value = '';
    } else if (event.key === 'Backspace' && inputValue.value.length === 0) {
        chips.value.pop();
        updateLimiter();
    }
}
</script>
<template>
    <div class="container-input-basic">
        <label :for="idInput">Tags:</label>
        <div class="chips_input">
            <div class="inner" @click="focusInput">
            <span class="chip" v-for="(chip, index) in chips" :key="index">
                {{ chip }}
                <button aria-label="remove this chip" @click="removeChip(index)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
            </span>
                <input
                    :id="idInput"
                    type="text"
                    @keyup="handleInput"
                    v-model="inputValue"
                    ref="chipInput"
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
div.chips_input {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    --primary: #fff;
    --secondary: #111;
    --invalid: #f00;
    color: var(--secondary);
    margin-bottom: 20px;
}

div.chips_input > label {
    opacity: 0.8;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color: inherit;
}

div.chips_input > p {
    font-size: 0.8rem;
    opacity: 0.75;
    margin: 0 0.25rem;
    color: inherit;
}

div.chips_input > div.inner {
    width: 100%;
    min-height: 2rem;
    background-color: var(--primary);
    border: 1px solid #3333;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 0.5rem;
    box-sizing: border-box;
    position: relative;
    border-radius: 5px;
}

div.chips_input > div.inner > input {
    border: none;
    outline: none;
    font-size: 1rem;
    position: relative;
    background: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    color: var(--secondary);
}

span.chip {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    background: var(--secondary);
    border-radius: 0.5rem;
    color: var(--primary);
    font-size: 0.8rem;
    padding-right: 1.5rem;
    position: relative;
}

span.chip > button {
    border: none;
    background: transparent;
    color: transparent;
    position: absolute;
    top: 50%;
    right: 0.15rem;
    transform: translateY(-50%);
}

span.chip > button > i {
    font-family: fontawesome;
    cursor: pointer;
    color: var(--primary);
}

span.limit {
    float: right;
}
</style>