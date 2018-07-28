<template>
    <div>
        <Navigation_menu></Navigation_menu>
        <Banner_principal></Banner_principal>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';

export default {
    components: {
        Navigation_menu: Navigation,
        Banner_principal: Banner
    },
}
</script>