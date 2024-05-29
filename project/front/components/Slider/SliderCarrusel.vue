<script setup lang="ts">
const imageURL = ref('https://i.pinimg.com/originals/e6/ec/a9/e6eca9e180b4d7d9767558a63843e20c.jpg');
</script>
<template>
    <div class="slider">
        <input class="slider__dot" type="radio" name="slider" title="slide1" checked="checked"/>
        <input class="slider__dot" type="radio" name="slider" title="slide2"/>
        <input class="slider__dot" type="radio" name="slider" title="slide3"/>
        <input class="slider__dot" type="radio" name="slider" title="slide4"/>
        <div class="slider__inner">
            <div class="slider__body">
                <i class="slider__image fa fa-codepen"></i>
                <h2 class="slider__caption">codepen</h2>
                <p class="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                </p>
            </div>
            <div class="slider__body" :style="{ background: `url(${imageURL})  no-repeat center center fixed` }">
                <div class="container-text">
                    <i class="slider__image fa fa-newspaper-o"></i>
                    <h2 class="slider__caption">newspaper-o</h2>
                    <p class="slider__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                    </p>
                </div>
            </div>
            <div class="slider__body">
                <i class="slider__image fa fa-television"></i>
                <h2 class="slider__caption">television</h2>
                <p class="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                </p>
            </div>
            <div class="slider__body">
                <i class="slider__image fa fa-diamond"></i>
                <h2 class="slider__caption">diamond</h2>
                <p class="slider__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
//element.style {
//    background-size: cover;
//    background: url('https://i.pinimg.com/originals/e6/ec/a9/e6eca9e180b4d7d9767558a63843e20c.jpg')no-repeat center center fixed;
//}
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

$slider-length: 4;
$radioBtn-size: 16px;
$btn-color: #ccc;
$active-color: #333;
//---------------------------------------------------

*, *:before, *:after { box-sizing: border-box;}

body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
}
.container-text{
    background: var(--light-purple);
    opacity: .8;
    border-radius: 2rem;
    padding: 1rem 2rem;
}
.slider {
    height: 50vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: center;

    &__dot {
        width: $radioBtn-size;
        height: $radioBtn-size;
        margin: 2rem $radioBtn-size;
        border-radius: 50%;
        z-index: 10;
        background-color: $btn-color;
        outline: $radioBtn-size / 2 solid $btn-color;
        outline-offset: $radioBtn-size / -2;
        box-shadow:
            0 0 0 0 $active-color,
            0 0 0 0 rgba($active-color,0);
        cursor: pointer;
        appearance: none;
        backface-visibility: hidden;

        &:checked {
            background-color: $active-color;
            animation: check 0.5s linear forwards;

            @for $i from 0 to $slider-length {
                &:nth-of-type(#{$i+1}) {
                    ~ .slider__inner {
                        transform: translateX((-100% * $i) / $slider-length);
                    }
                }
            }
        }
    }

    &__inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% * $slider-length;
        height: 100%;
        transition: all 1s ease-out;
        display: flex;
        flex-flow: row nowrap;
    }

    &__body {
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
        background: #0a53be;
    }

    &__image {
        font-size: 2.7rem;
        margin-bottom: 2rem;
    }

    &__caption {
        font-weight: bold;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    &__text {
        color: #fff;
        margin-bottom: 3rem;
        max-width: 300px;
    }
}



// animation ---------------------------

@keyframes check {
    50% {
        outline-color: $active-color;
        box-shadow:
            0 0 0 $radioBtn-size $active-color,
            0 0 0 $radioBtn-size*3 rgba($active-color,0.2);
    }
    100% {
        outline-color: $active-color;
        box-shadow:
            0 0 0 0 $active-color,
            0 0 0 0 rgba($active-color,0);
    }
}

</style>