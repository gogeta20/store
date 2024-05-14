<script setup lang="ts">
import InputBasic from "~/components/Input/InputBasic.vue";
// import TiptapEditorContent from "nuxt-tiptap-editor";
const editor = useEditor({
    content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
    extensions: [TiptapStarterKit],
    editorProps: {
        attributes: {
            class: 'container-text-tiptap',
        },
    },
});
</script>
<template>
    <div class="container-editor">
        <div v-if="editor" class="container-btns">
            <button
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }"
                class="btn btn-outline-dark"
            >
                bold
            </button>
            <button
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
                class="btn btn-outline-dark"
            >
                italic
            </button>
            <button
                @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
                class="btn btn-outline-dark"
            >
                strike
            </button>
            <button
                @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
                class="btn btn-outline-dark"
            >
                code
            </button>
            <button @click="editor.chain().focus().unsetAllMarks().run()" class="btn btn-outline-dark">
                clear marks
            </button>
            <button @click="editor.chain().focus().clearNodes().run()"   class="btn btn-outline-dark">
                clear nodes
            </button>
            <button
                @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }"
                class="btn btn-outline-dark"
            >
                paragraph
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
                class="btn btn-outline-dark"
            >
                h1
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                class="btn btn-outline-dark"
            >
                h2
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
                class="btn btn-outline-dark"
            >
                h3
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
                class="btn btn-outline-dark"
            >
                h4
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
                class="btn btn-outline-dark"
            >
                h5
            </button>
            <button
                @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
                class="btn btn-outline-dark"
            >
                h6
            </button>
            <button
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }"
                class="btn btn-outline-dark"
            >
                bullet list
            </button>
            <button
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }"
                class="btn btn-outline-dark"
            >
                ordered list
            </button>
            <button
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }"
                class="btn btn-outline-dark"
            >
                code block
            </button>
            <button
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }"
                class="btn btn-outline-dark"
            >
                blockquote
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()"   class="btn btn-outline-dark">
                horizontal rule
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()"   class="btn btn-outline-dark">
                hard break
            </button>
            <button
                @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()"
                class="btn btn-outline-dark"
            >
                undo
            </button>
            <button
                @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()"
                class="btn btn-outline-dark"
            >
                redo
            </button>
        </div>
        <TiptapEditorContent :editor="editor"/>
    </div>
</template>
<style scoped lang="scss">
.container-editor{
    background-color: white;
    color: black;
    padding: 2rem;
    border-radius: 10px;
    margin: 2rem 0;
}
.container-btns{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-bottom:2rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px;
}

</style>
