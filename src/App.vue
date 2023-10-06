<script setup>
import Header from "@/components/header.vue";
import section1 from "@/components/section1.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { IO } from "./animations/observe"

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const speed = document.querySelectorAll("[data-speed]");
    const elem = document.querySelector(".horizontal_scroll > div");
    const fadeElems = document.querySelectorAll("[data-fade]");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sticky_container",
            scrub: 1,
            start: "top top",
            pinSpacing: false,
            pin:'main' ,
            end: () => "+=" + (elem.scrollWidth),
            toggleActions: "play reset none restart",
            markers: true,
        },
    });

    tl.to(elem, {
        x: () => -elem.scrollWidth,
        ease: "Power1.easeInOut",
    });

    speed.forEach((movingElem) => {
        let speedMultiplier = movingElem.getAttribute("data-speed");
        tl.to(
            movingElem,
            {
                ease:"Linear.easeInOut",
                x: (index, target) => speedMultiplier * (target.scrollWidth - document.documentElement.clientWidth),
            },
            0
        );
    });

    fadeElems.forEach((fadeElem) => {
        gsap.set(fadeElem, {autoAlpha:0})
        IO(fadeElem).then(() => {
            gsap.to(fadeElem, {
                autoAlpha: 1,
                duration:1
         })
      }, {
            threshold:1
         })
    });
    const up = document.querySelectorAll('[data-slide-up]');
    up.forEach((item) => {
        IO(item).then(() => {
        gsap.from(item, {
            yPercent: 50,
            duration: .5,
            ease:"circ.easeOut"
        })
    })
    })
    const down = document.querySelectorAll('[data-slide-down]');
    down.forEach((item) => {
        IO(item).then(() => {
        gsap.from(item, {
            yPercent: -50,
            duration: .5,
            ease:"circ.easeOut"
        })
    })
    })
   
});
</script>

<template>
    <main>
        <Header />
        <section class="horizontal_scroll">
            <section1 />
        </section>
    </main>
</template>

<style scoped lang="scss">
.horizontal_scroll {
    background: #fafafa;
    display: flex;
  overflow: hidden;
    gap: 2rem;
    flex-direction: row;
    flex-wrap: nowrap;
    > div {
        height: calc(100vh - 51px);
        min-height: calc(100vh - 51px);
        max-height: calc(100vh - 51px);
        min-width: 100vw;
    }
}
</style>
