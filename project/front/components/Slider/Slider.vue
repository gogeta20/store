<script setup lang="ts">
import {SineWaves} from "sine-waves/sine-waves.min";
onMounted(()=>{
  let waves = new SineWaves({
    el: document.getElementById('waves'),

    speed: 4,

    width: function () {
      return window.innerWidth;
    },

    height: function () {
      return window.innerHeight/2;
    },

    ease: 'SineInOut',

    wavesWidth: '70%',

    waves: [
      {
        timeModifier: 4,
        lineWidth: 1,
        amplitude: -25,
        wavelength: 25
      },
      {
        timeModifier: 2,
        lineWidth: 2,
        amplitude: -50,
        wavelength: 50
      },
      {
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -100,
        wavelength: 100
      },
      {
        timeModifier: 0.5,
        lineWidth: 1,
        amplitude: -150,
        wavelength: 150
      },
      // {
      //   timeModifier: 0.25,
      //   lineWidth: 2,
      //   amplitude: -400,
      //   wavelength: 400
      // }
    ],

    // Called on window resize
    resizeEvent: function () {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0, "rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");

      var index = -1;
      var length = this.waves.length;
      while (++index < length) {
        this.waves[index].strokeStyle = gradient;
      }

      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });

})
</script>
<template>
  <div class="slider-one">
    <canvas id="waves"></canvas>
    <div class="container">
<!--      <ul class="nav">-->
<!--        <li class="nav__item .nav__item&#45;&#45;logo">Logo</li>-->
<!--        <div class="nav__links">-->
<!--          <li class="nav__item">Why use COO</li>-->
<!--          <li class="nav__item">How it works</li>-->
<!--          <li class="nav__item">Testimonial</li>-->
<!--          <li class="nav__item">About us</li>-->
<!--        </div>-->
<!--      </ul>-->
      <div class="splash__center">
        <h1 class="splash__title">Moto500</h1>
        <button class="splash__btn">vamos alli</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.slider-one {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  background: linear-gradient( 90deg, #34AFFC, red ) no-repeat center center fixed;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.nav__item--logo {
  width: 100px;
  margin-left: 15%;
}

.nav__links {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
}
.nav__item {
  padding: 0 30px;
  height: 100px;
  text-transform: uppercase;
  color: white;
}

.splash__center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.splash__title {
  text-align: center;
  color: white;
  font-size: 42px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
}

.splash__btn {
  width: 150px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 15px;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 30px;
}

#waves {
  position: absolute;
  z-index: 0;
  height: 500px;
  background-color: transparent;
  opacity: 0.5;
}

</style>