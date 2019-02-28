<template>
    <div>
         <!--==========================
      Services Section
    ============================-->
    <section id="services">
      <div class="container">

        <header class="section-header wow fadeInUp">
          <h3>{{titulo}}</h3>
        </header>

        <div class="row pt-3">
            <div class="swiper-container">
              <div class="swiper-wrapper">
<!-- style="width: 20rem;" -->
<!-- img-fluid -->
                <div class="swiper-slide" v-for="(service, index) in services" v-bind:key="index.id">
                  <div class="card box wow bounceInUp" style="width: 20rem;" :data-wow-duration="service.data_duration">
                    <img :src="service.imagen" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                      <div class="icon"><i :class="service.icon"></i></div>
                      <h4 class="title">
                        <a href="#">{{service.title}}</a>
                      </h4>
                      <p class="description text-justify">{{service.description}}</p>
                    </div>
                  </div>
                </div>

              </div>
              <!-- Add Pagination -->
              <br>
              <div class="swiper-pagination"></div>
            </div>
        </div>
      </div>
    </section><!-- #services -->
    </div>
</template>

<script>

export default {
  data: function () {
    return {
      titulo: 'Servicios',
      services: [
        { 
          data_duration: '0',
          imagen: 'img/services/desarrollo.jpg',
          icon: 'ion-code',
          title: 'Desarrollo Web',
          description: 'Deja que vean tu marca con una buena plataforma digital usando las mejores tecnologías para tu comodidad y la experiencia de tus consumidores.'
        },
        {
          data_duration: '0.8s',
          imagen: 'img/services/position.jpg',
          icon: 'ion-network',
          title: 'Posicionamiento web',
          description: 'El posicionamiento web te permitirá mejorar la visibilidad de tu sitio web en los buscadores,indispensable para cualquier empresa.'
        },
        {
          data_duration: '1s',
          imagen: 'img/services/ecommerce.jpg',
          icon: 'ion-ios-bookmarks-outline',
          title: 'E-Comerce',
          description: 'Vende tus productos con mayor seguridad con una tienda virtual  y únete al negocio más rentable del mundo digital.'
        },
        {
          data_duration: '1.4s',
          imagen: 'img/services/video.jpg',
          icon: 'ion-ios-videocam-outline',
          title: 'Video institucional',
          description: 'Realizamos videos de calidad sobre tu negocio captando la atención de tus consumidores  y a su vez conozcan tus productos y servicios.'
        },
        {
          data_duration: '1.8s',
          imagen: 'img/services/photography.jpg',
          icon: 'ion-ios-camera-outline',
          title: 'Fotografia Digital',
          description: 'Te entregamos fotografías de calidad para que puedas realizar tus catálogos, volantes, revistas, entre otros. Y así tus productos o servicios se reflejen de forma visual.'
        }
      ]
    }
  }
}
</script>


<style scoped>

img {
  height: 12rem;
}

.swiper-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  
#services {
  background: #fff;
  background-size: cover;
  padding: 60px 0 40px 0;
  overflow-x: none;
}

#services .box {
  margin-bottom: 30px;
}

#services .icon i {
  color: #18d26e;
  font-size: 36px;
  line-height: 1;
  transition: 0.5s;
}

#services .title {
  /* margin-left: 60px; */
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

#services .title a {
  color: #111;
}

#services .box:hover .title a {
  color: #18d26e;
}

#services .description {
  font-size: 14px;
  /* margin-left: 60px; */
  line-height: 24px;
  margin-bottom: 0;
}

</style>
