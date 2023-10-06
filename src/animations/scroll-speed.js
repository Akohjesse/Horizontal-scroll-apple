import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const speed = (mult, selector) => {
    let elem = document.querySelector(selector);
    console.log(elem);
    let fasterTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sticky_container",
            scrub: 1,
            start: "top top",
            end: () => "+=" + (elem.scrollWidth - document.documentElement.clientWidth / 2),
        },
    });
    fasterTl.to(elem, {
        x: () => mult * (elem.scrollWidth - document.documentElement.clientWidth / 1.5),
    });
};
