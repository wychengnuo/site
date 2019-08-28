<template>
    <div>
        <Header />
        <nuxt />
        <Footer />
        <QRcode />
    </div>
</template>

<script>
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import QRcode from '~/components/qrcode/QRcode';
export default {
    components: {
        Header,
        Footer,
        QRcode
    }
};
</script>
<style>
    @import './default.css';
</style>
