<template>
  <Head>
    <Title>Post {{ id }}</Title>
  </Head>

  <h2>Bienvenido al Post #{{ id }}</h2>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp();

    if (!/^[0-9]+$/.test(route.params.id)) {
      throw createError({
        statusCode: "500",
        statusMessage: "Param Type Is Invalid",
      });
    }

    return true;
  },
});
</script>
