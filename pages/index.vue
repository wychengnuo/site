<template>
    <div class="container">
        <!-- <Banner />
        <About />
        <ServiceItem />
        <ProductItem />
        <Advantage />
        <Case /> -->
        <Contact />
    </div>
</template>

<script>
import Banner from '~/components/banner/Banner';
import About from '~/components/about/About';
import ServiceItem from '~/components/service/serviceItem/ServiceItem';
import ProductItem from '~/components/service/produceItem/ProductItem';
import Advantage from '~/components/advantage/Advantage';
import Contact from '~/components/contact/Contact';
import Case from '~/components/case/Case';

export default {
    components: {
        Banner,
        About,
        ServiceItem,
        ProductItem,
        Advantage,
        Case,
        Contact,
    }
};
</script>

<style module>
    /* @import './index.css'; */
</style>
