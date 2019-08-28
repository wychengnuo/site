<template>
    <div :class="$style.qrcodeContainer">
        <div :class="$style.qrcode">
            <img :src="qrcodeImg">
            <p :class="$style.scan">
                微信扫一扫关注
            </p>
        </div>
        <div :class="$style.text">
            <p>把您的需求告诉我</p>
            <p>我将竭诚为您服务</p>
            <p>talk your needs from OK to OMG.</p>
        </div>
    </div>
</template>

<script>
import SERVICE from '@/static/service/service.jpg';
export default {
    data() {
        return {
            qrcodeImg: SERVICE,
        };
    }
};
</script>

<style module>
    @import './QRcode.css';
</style>