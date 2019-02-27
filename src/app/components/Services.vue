<template>
    <div>
         <!--==========================
      Services Section
    ============================-->
    <section id="services">
      <div class="container">

        <header class="section-header wow fadeInUp">
          <h3>Servicios</h3>
        </header>

        <div class="row pt-3">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card box wow bounceInUp" style="width: 20rem;">
                    <img src="img/services/desarrollo.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                      <div class="icon"><i class="ion-code"></i></div>
                      <h4 class="title">
                        <a href="#" data-toggle="modal" data-target="#exampleModalCenter1">Desarrollo web</a>
                      </h4>
                      <p class="description text-justify">Deja que vean tu marca con una buena plataforma digital usando las mejores tecnologías para tu comodidad y la experiencia de tus consumidores. </p>
                      
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card box wow bounceInUp" style="width: 20rem;" data-wow-duration="0.8s">
                    <img src="img/services/position.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                       <div class="icon"><i class="ion-network"></i></div>
                       <h4 class="title">
                          <a href="#" data-toggle="modal" data-target="#exampleModalCenter2">Posicionamiento web</a>
                       </h4>
                      <p class="description text-justify">El posicionamiento web te permitirá mejorar la visibilidad de tu sitio web en los buscadores,indispensable para cualquier empresa.</p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card box wow bounceInUp" style="width: 20rem;" data-wow-duration="1s">
                    <img src="img/services/ecommerce.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                      <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                      <h4 class="title">
                        <a href="" data-toggle="modal" data-target="#exampleModalCenter3">E-Comerce</a>
                      </h4>
                      <p class="description text-justify">Vende tus productos con mayor seguridad con una tienda virtual  y únete al negocio más rentable del mundo digital. </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="card box wow bounceInUp" style="width: 20rem;" data-wow-duration="1.4s">
                    <img src="img/services/video.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                      <div class="icon"><i class="ion-ios-videocam-outline"></i></div>
                      <h4 class="title">
                        <a href="" data-toggle="modal" data-target="#exampleModalCenter4">Video institucional</a>
                      </h4>
                      <p class="description text-justify">Realizamos videos de calidad sobre tu negocio captando la atención de tus consumidores  y a su vez conozcan tus productos y servicios.</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card box wow bounceInUp" style="width: 20rem;" data-wow-duration="1.8s">
                    <img src="img/services/photography.jpg" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                        <div class="icon"><i class="ion-ios-camera-outline"></i></div>
                        <h4 class="title"><a href="" data-toggle="modal" data-target="#exampleModalCenter5">Fotografia Digital</a></h4>
                        <p class="description text-justify">Te entregamos fotografías de calidad para que puedas realizar tus catálogos, volantes, revistas, entre otros. Y así tus productos o servicios se reflejen de forma visual.</p>
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

<style scoped>

img {
  height: 13rem;
}

.card-body {
  height: 230px;
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
