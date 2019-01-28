<template>
    <div>
        <Navigation_menu></Navigation_menu>
        <Banner_principal></Banner_principal>
        <Features></Features>
        <AboutUs_seccion></AboutUs_seccion>
        <Services_seccion></Services_seccion>
        <Skills_seccion></Skills_seccion>
        <Proyectos_seccion></Proyectos_seccion>
        <OurClients_seccion></OurClients_seccion>
        <Contact_seccion></Contact_seccion>
        <Footer_seccion></Footer_seccion>
    </div>
</template>
    
<script>
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Proyectos from './components/Proyectos.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import FeatureServices from './components/FeaturesServices.vue';
import OurClients from './components/OurClients.vue';

export default { 
    components: {
        Navigation_menu: Navigation,
        Banner_principal: Banner,
        Features: FeatureServices,
        AboutUs_seccion: AboutUs,
        Services_seccion: Services,
        Proyectos_seccion: Proyectos,
        OurClients_seccion: OurClients,
        Skills_seccion: Skills,
        Contact_seccion: Contact,
        Footer_seccion: Footer
    },
}
</script>