<template>
    <div>
         <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">
        
        <header class="section-header">
          <h3>{{titulo}}</h3>
        </header>

        <div class="row about-cols">
          <div :class="['col-md-4', 'wow', 'fadeInUp']" v-for="(parrafo, index) in parrafos" v-bind:key="index.id" :data-wow-delay="parrafo.delay">
            <div class="about-col">
              <div class="img">
                <img :src="parrafo.img" alt="" :class="'img-fluid'">
                <div class="icon"><i :class="parrafo.icons"></i></div>
              </div>
              <h2 class="title"><a href="#">{{parrafo.titulo}}</a></h2>
              <p :class="'text-justify'">
                 {{parrafo.descripcion}}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- #about -->
    </div>
</template>

<script>
export default {
  
  data: function () {
    return {
      titulo: 'SOBRE NOSOTROS',
      parrafos: [
            {
                img: 'https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526678/systemurb-assets/about/about-mission.jpg',
                titulo: 'Nuestra Mision',
                descripcion: 'Contribuir al crecimiento de nuestros clientes ofreciendo soluciones digitales y audiovisuales para  así potenciar su marca e imagen en el mundo digital',
                delay: '0',
                icons: 'ion-ios-speedometer-outline'
            },
            {
                img: 'https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526678/systemurb-assets/about/about-plan.jpg',
                titulo: 'Nuestro plan',
                descripcion:'Fortalecer a nuestros socios usando las nuevas tecnologías e diseños innovadores para sobresalir como empresa y llamar la atención de los consumidores.',
                delay: '0.1s',
                icons: 'ion-ios-list-outline'
            },
            {
                img: 'https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526678/systemurb-assets/about/about-vision.jpg',
                titulo: 'Nuestra Vision',
                descripcion:'Ser la agencia número uno en el Perú, ayudando, creando e innovado para el beneficio y desarrollo de nuestros clientes a través de estrategias digitales.',
                delay: '0.2s',
                icons: 'ion-ios-eye-outline'
            }
      ],
    }
  }

}
</script>


<style scoped>


#about {
  background: url("/img/about-bg.jpg") center top no-repeat fixed;
  background-size: cover;
  padding: 60px 0 40px 0;
  position: relative;
}

#about::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.92);
  z-index: 9;
}

#about .container {
  position: relative;
  z-index: 10;
}

#about .about-col {
  background: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

#about .about-col .img {
  position: relative;
}

#about .about-col .img img {
  border-radius: 4px 4px 0 0;
}

#about .about-col .icon {
  width: 64px;
  height: 64px;
  padding-top: 8px;
  text-align: center;
  position: absolute;
  background-color: #18d26e;
  border-radius: 50%;
  text-align: center;
  border: 4px solid #fff;
  left: calc( 50% - 32px);
  bottom: -30px;
  transition: 0.3s;
}

#about .about-col i {
  font-size: 36px;
  line-height: 1;
  color: #fff;
  transition: 0.3s;
}

#about .about-col:hover .icon {
  background-color: #fff;
}

#about .about-col:hover i {
  color: #18d26e;
}

#about .about-col h2 {
  color: #000;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 0;
  margin: 40px 0 12px 0;
}

#about .about-col h2 a {
  color: #000;
}

#about .about-col h2 a:hover {
  color: #18d26e;
}

#about .about-col p {
  font-size: 14px;
  line-height: 24px;
  color: #333;
  margin-bottom: 0;
  padding: 0 20px 20px 20px;
}

</style>
