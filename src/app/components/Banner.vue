<template>  
     <div>
       <!--========================== 
    Intro Section 
  ============================-->
  <section id="intro">
    <div class="intro-container">
      <div id="introCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators"></ol>
  
        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active">
            <div class="carousel-background">
              <img 
              srcset="img/intro-carousel/banner2_w400.jpg 400w,
                      img/intro-carousel/banner2_w650.jpg 650w"
              sizes="(max-width:400px) 400px,
                   (max-width:900px) 650px"
              src="img/intro-carousel/banner2.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>DIFERENCIATE DEL RESTO</h2> 
                <p>Y CREA TU SITIO WEB CON NOSOTROS</p>
                <br>
                <a href="#featured-services" class="btn-get-started scrollto">Empieza</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background">
              <img 
              srcset="img/intro-carousel/banner1_w400.jpg 400w,
                      img/intro-carousel/banner1_w650.jpg 650w"
              sizes="(max-width:400px) 400px,
                   (max-width:900px) 650px"
              src="img/intro-carousel/banner1.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>TRANSFORMA TUS VISITAS EN VENTAS</h2>
                <p>Y ASEGURA TUS CLIENTES</p>
                <br>
                <a href="#featured-services" class="btn-get-started scrollto">Empieza</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background">
              <img 
              srcset="img/intro-carousel/banner3_w400.jpg 400w,
                      img/intro-carousel/banner3_w650.jpg 650w"
              sizes="(max-width:400px) 400px,
                   (max-width:900px) 650px"
              src="img/intro-carousel/banner3.jpg" alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>UNA IMAGEN CAMBIA</h2>
                <p>TU CRECIMINETO EMPRESARIAL</p>
                <br>
                <a href="#featured-services" class="btn-get-started scrollto">Empieza</a>
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section><!-- #intro -->
     </div>
</template>

<style scoped>

#intro {
  display: table;
  width: 100%;
  height: 100vh;
  background: #000;
}

#intro .carousel-item {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#intro .carousel-item::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

#intro .carousel-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#intro .carousel-background img {
  max-width: 100%;
}

#intro .carousel-content {
  text-align: center;
}

#intro h2 { /*verificar*/
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
}

#intro p {
  width: 80%;
  margin: 0 auto 30px auto;
  color: #fff;
  font-size: 28px;
}

#intro .carousel-fade {
  overflow: hidden;
}

#intro .carousel-fade .carousel-inner .carousel-item {
  transition-property: opacity;
}

#intro .carousel-fade .carousel-inner .carousel-item,
#intro .carousel-fade .carousel-inner .active.carousel-item-left,
#intro .carousel-fade .carousel-inner .active.carousel-item-right {
  opacity: 0;
}

#intro .carousel-fade .carousel-inner .active,
#intro .carousel-fade .carousel-inner .carousel-item-next.carousel-item-left,
#intro .carousel-fade .carousel-inner .carousel-item-prev.carousel-item-right {
  opacity: 1;
  transition: 0.5s;
}

#intro .carousel-fade .carousel-inner .carousel-item-next,
#intro .carousel-fade .carousel-inner .carousel-item-prev,
#intro .carousel-fade .carousel-inner .active.carousel-item-left,
#intro .carousel-fade .carousel-inner .active.carousel-item-right {
  left: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

#intro .carousel-control-prev,
#intro .carousel-control-next {
  width: 10%;
}

#intro .carousel-control-next-icon,
#intro .carousel-control-prev-icon {
  background: none;
  font-size: 32px;
  line-height: 1;
}

#intro .carousel-indicators li {
  cursor: pointer;
}

#intro .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 32px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
  background: #18d26e;
}

#intro .btn-get-started:hover {
  background: #fff;
  color: #18d26e;
}

@media (max-width: 768px) {
  #intro h2 {
    font-size: 28px;
  }
  #intro p {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  #intro p {
    width: 60%;
  }
  
  #intro .carousel-control-prev,
  #intro .carousel-control-next {
    width: 5%;
  }

}

</style>
