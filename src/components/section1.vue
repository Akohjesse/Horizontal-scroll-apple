<template>
    <div class="r__sect-one">
        <div class="r_hero">
            <img data-speed="1" src="../assets/hero_img.jpeg" alt="" />
            <div data-fade class="r_hero_txt">
                <h1>
                    Meet the <br />
                    new iPad Pro.
                </h1>
                <div class="links">
                    <a href="">Watch the film <span class="material-symbols-outlined"> arrow_forward_ios </span></a>
                    <a href="">Watch the keynote <span class="material-symbols-outlined"> play_circle </span></a>
                </div>
            </div>
            <div class="r_hero_copy">
                <video autoplay data-speed="0.9" muted playsinline src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/keyboard/medium.mp4"></video>
                <div class="text-block">
                    <p>
                        <span data-fade>It’s all new, all screen, and all powerful.</span>

                        Completely redesigned and packed with our most advanced technology, it will make you rethink what iPad is capable of.
                    </p>
                    <span autoplay data-speed="0.8" class="small">And what a computer is capable of.</span>
                </div>
            </div>
        </div>
        <div class="r_design">
            <img data-fade data-speed="0.04" src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_2__eq5zmevfgfqu_medium_2x.jpg" alt="" />
            <img data-speed="-0.05" src="https://www.apple.com/v/ipad-pro/s/images/overview/two_sizes_1__y8zl65wgpfmy_medium_2x.png" alt="" />
            <p data-fade >
                The new <span>all-screen design</span> means <br />
                iPad Pro is a magical piece of glass that does everything you need, any way you hold it.1
            </p>
            <video data-speed=".5"  muted playsinline autoplay src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/ipad/medium.mp4"></video>
            <p data-speed="-0.01"  data-fade>
                With new, <span>intuitive gestures</span>, getting <br />
                around is simple
            </p>
        </div>
        <div class="r_vid">
            <div data-speed="0.08" class="r_vid-lcd">
                <div class="cont"  data-slide-down>
                    <video autoplay muted playsinline src="https://www.apple.com/105/media/us/ipad-pro/2018/cE249dd1_58dc_487a_880b_6a1bc197cc43/anim/swipe-up-screen/medium.mp4"></video>
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/shadow__d20u3oakeiye_large.png" alt="" />
                </div>
                <img data-slide-up  src="https://www.apple.com/v/ipad-pro/s/images/overview/swipe_startframe__ekeztlf5fpaq_large.png" alt="" />
            </div>
            <div data-fade class="text">
                <p class="grey-txt">
                    The new <span>Liquid Retina display</span> goes from edge to edge. True-to-life color and ProMotion technology make everything look gorgeous and feel responsive.
                </p>
                <span data-speed="0.4" data-fade class="small">You’ve got to see it — and touch it — to believe it.</span>
            </div>
        </div>
        <div class="r_tone">
            <div class="r_frames">
                <div data-fade data-slide-up>
                    <img  src="https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_1__csuokryyjb42_medium_2x.jpg" alt="" />
                </div>
                <div data-slide-down data-fade >
                    <img src="https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_2__dg5i2euzd3ee_medium_2x.jpg" alt="" />
                </div>
            </div>
            <p data-fade><span>Face ID</span> comes to iPad. It’s engineered for secure unlocking and works seamlessly whether you hold it in portrait or landscape.</p>
            <img data-slide-up data-fade src="https://www.apple.com/v/ipad-pro/s/images/overview/face_id__8ez3e4w0imay_medium_2x.jpg" alt="" />
            <p data-fade>
                Use Face ID to unlock your iPad Pro, <br />
                log in to apps, and pay with a glance.
            </p>
        </div>
        <div class="r_last">
            <div class="phone">
                <img src="https://www.apple.com/v/ipad-pro/s/images/overview/usb_c_screen__ems2xs6v94wi_medium_2x.jpg" alt="" />
                <img src="https://www.apple.com/v/ipad-pro/s/images/overview/shadow__d20u3oakeiye_large.png" alt="" />
            </div>
            <div class="cam"></div>
            <p data-speed=".2" class="grey-txt"><span>USB-C</span> gives you a high-performance connection to accessories like an <br />external display or camera</p>
        </div>
        <div class="r_bot">
            <p>
                iPad Pro has <span>two great cameras</span> equipped with Smart HDR. A 12MP camera for stunning photos, 4K video, document scanning, and AR experiences. And a TrueDepth camera perfect
                for Portrait selfies, FaceTime, Animoji, and Memoji.
            </p>
            <img data-slide-up data-fade src="https://www.apple.com/v/ipad-pro/s/images/overview/two_cameras__epctxn42bjwy_medium_2x.jpg" alt="" />
            <div class="thin">
                <p>At just over a pound, it’s more portable than ever. Connect on the go with fast Wi-Fi and Gigabit-class LTE</p>
            </div>
            <!-- <p>That’s a look at the new iPad Pro. It’s the biggest change to</p> -->
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { IO } from "../animations/observe";

onMounted(() => {
    IO(document.querySelector(".r_hero_copy .text-block")).then(() => {
        console.log("there");
    });
});
</script>
