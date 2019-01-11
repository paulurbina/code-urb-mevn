<template>
    <div>
        <Navigation_menu></Navigation_menu>
        <Banner_principal></Banner_principal>
        <AboutUs_seccion></AboutUs_seccion>
        <Services_seccion></Services_seccion>
        <Skills_seccion></Skills_seccion>
        <Team_seccion></Team_seccion>
        <Contact_seccion></Contact_seccion>
        <Footer_seccion></Footer_seccion>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Banner from './components/Banner.vue';
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Team from './components/Team.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default { 
    components: {
        Navigation_menu: Navigation,
        Banner_principal: Banner,
        AboutUs_seccion: AboutUs,
        Services_seccion: Services,
        Team_seccion: Team,
        Skills_seccion: Skills,
        Contact_seccion: Contact,
        Footer_seccion: Footer
    },
}
</script>