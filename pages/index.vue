<template>
    <div class="container">
        <Banner />
        <About />
        <ServiceItem />
        <ProductItem />
        <Advantage />
    </div>
</template>

<script>
import Banner from '~/components/banner/Banner';
import About from '~/components/about/About';
import ServiceItem from '~/components/service/serviceItem/ServiceItem';
import ProductItem from '~/components/service/produceItem/ProductItem';
import Advantage from '~/components/advantage/advantage';

export default {
    components: {
        Banner,
        About,
        ServiceItem,
        ProductItem,
        Advantage,
    }
};
</script>

<style module>
    /* @import './index.css'; */
</style>
