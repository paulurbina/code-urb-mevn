<template>
    <div>
        <Navigation_menu></Navigation_menu>
        <Banner_principal></Banner_principal>
        <Nosotros_seccion></Nosotros_seccion>
        <Servicios_seccion></Servicios_seccion>
        <Herramientas_seccion></Herramientas_seccion>
        <Contactanos_seccion></Contactanos_seccion>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import Nosotros from './components/Nosotros.vue';
import Servicios from './components/Servicios.vue';
import Herramientas from './components/Herramientas.vue';
import Contactanos from './components/Contactanos.vue';

export default { 
    components: {
        Navigation_menu: Navigation,
        Banner_principal: Banner,
        Nosotros_seccion: Nosotros,
        Servicios_seccion: Servicios,
        Herramientas_seccion: Herramientas,
        Contactanos_seccion: Contactanos
    },
}
</script>

<style>
    div {
        margin: auto;
        padding: auto;
    }
</style>
