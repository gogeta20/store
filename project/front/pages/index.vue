<script setup>
import { articlesHomeApp } from '~/src/home/application/Get/articlesHomeApp';
useHead({
  title: 'Home',
});

const response = await articlesHomeApp().get();

console.log(response, 'http');
// const api = useApi();

// const { data } = await api({
//   method: 'get',
//   url: '/check',
// });
</script>
<template>
  <section class="mt-5 mb-5">
    <div class="container">
      <div class="text-center mb-5">
        <h1>Bienvenidos a Refugio Perruno</h1>
        <h3>Cuidado y Compromiso Animal</h3>
      </div>

      <div>
        <i class="bi bi-alarm"></i>
        <p>{{ response }}</p>
      </div>
      <div class="mb-5">
        <h2>Nuestro Compromiso:</h2>
        <p>
          En Refugio Perruno, estamos dedicados a fomentar el bienestar y la
          felicidad de todas las mascotas. Creemos en la importancia de crear
          conexiones significativas entre humanos y animales, y nuestro
          compromiso se refleja en cada aspecto de nuestra plataforma.
        </p>
      </div>

      <div class="mb-5 d-flex">
        <img
          src="/img/vue.svg"
          alt="Descripción de la imagen"
          class="me-5 d-none d-sm-block"
        />
        <div class="p-4">
          <h2>Supervisión Veterinaria:</h2>
          <p>
            Para garantizar la más alta calidad de información y cuidado,
            Refugio Perruno está supervisado por un equipo de profesionales
            veterinarios comprometidos con la salud y el bienestar animal. Su
            experiencia y conocimientos respaldan cada artículo y consejo que
            compartimos.
          </p>
        </div>
      </div>

      <div class="mb-5 d-flex">
        <div class="p-4">
          <h2>Salud Animal:</h2>
          <p>
            En nuestra sección dedicada a la salud animal, abordamos temas
            vitales para el bienestar de tus mascotas. Desde consejos
            preventivos hasta información sobre enfermedades comunes, nuestro
            objetivo es proporcionar recursos valiosos que ayuden a mantener a
            tus peludos amigos saludables y felices.
          </p>
        </div>
        <img
          src="/img/vue.svg"
          alt="Descripción de la imagen"
          class="ms-5 d-none d-sm-block"
        />
      </div>

      <div class="mb-5 d-flex">
        <img
          src="/img/vue.svg"
          alt="Descripción de la imagen"
          class="me-5 d-none d-sm-block"
        />
        <div class="p-4">
          <h2>Alimentación Consciente:</h2>
          <p>
            La alimentación es una parte fundamental de la vida de cualquier
            mascota. En Refugio Perruno, nos esforzamos por ofrecer orientación
            sobre dietas equilibradas, recomendaciones de alimentos de calidad y
            consejos nutricionales para asegurarnos de que tus amigos peludos
            reciban la nutrición adecuada.
          </p>
        </div>
      </div>

      <div class="mb-5 d-flex">
        <div class="p-4">
          <h2>Educación Canina:</h2>
          <p>
            Los perros son seres inteligentes y leales que se benefician
            enormemente de una educación adecuada. En nuestra sección de
            educación canina, proporcionamos información sobre entrenamiento
            positivo, socialización y actividades que fortalecen el vínculo
            entre humanos y caninos.
          </p>
        </div>
        <img
          src="/img/vue.svg"
          alt="Descripción de la imagen"
          class="ms-5 d-none d-sm-block"
        />
      </div>

      <div class="mb-5 d-flex">
        <img
          src="/img/vue.svg"
          alt="Descripción de la imagen"
          class="me-5 d-none d-sm-block"
        />
        <div class="p-4">
          <h2>Nuestro Compromiso Continúa:</h2>
          <p>
            Refugio Perruno es más que una fuente de información; es una
            comunidad comprometida con el cuidado y la felicidad de los
            animales. Únete a nosotros mientras exploramos juntos el maravilloso
            mundo de las mascotas y trabajamos para construir un futuro más
            saludable y feliz para ellos. ¡Gracias por confiar en Refugio
            Perruno como tu recurso de confianza para el cuidado de tus
            mascotas!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
