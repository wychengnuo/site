<template>
    <div :class="$style.aboutContainer">
        <div :class="$style.about">
            <div :class="$style.aboutLeft">
                <img :class="$style.icon" :src="LEFTIMG">
            </div>
            <div :class="$style.aboutRight">
                <div :class="$style.aboutMess">
                    <img :class="$style.icon" :src="ABOUTICON">
                    <p :class="$style.title">
                        {{ title }}
                    </p>
                    <p :class="$style.desc">
                        {{ desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LEFTIMG from '~/static/about/about_left_img.jpg';
import ABOUTICON from '~/static/about/about_icon.png';
export default {
    data() {
        return {
            LEFTIMG,
            ABOUTICON,
            title: '关于我们',
            desc: '关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们XXXXXXXXXX',
        };
    }
};
</script>

<style module>
    @import './About.css';
</style>