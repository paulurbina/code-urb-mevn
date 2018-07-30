<template>
    <div>
        <Navigation_menu></Navigation_menu>
        <Banner_principal></Banner_principal>
        <Nosotros_seccion></Nosotros_seccion>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import Nosotros from './components/Nosotros.vue';

export default {
    components: {
        Navigation_menu: Navigation,
        Banner_principal: Banner,
        Nosotros_seccion: Nosotros
    },
}
</script>