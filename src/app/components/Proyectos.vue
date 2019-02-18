<template>
    <div>

         <section id="portfolio"  class="section-bg" >
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Nuestros Proyectos</h3>
        </header>
  
        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">Todos</li>
              <li data-filter=".filter-app">Redes</li>
              <li data-filter=".filter-card">Fotos</li>
              <li data-filter=".filter-web">Webs</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src="/img/portfolio-img/str1.jpg" class="img-fluid" alt="">
                <a href="https://serviciotecnicoriver.herokuapp.com/" class="link-details" title="Mas detalles" target="_blank"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="https://serviciotecnicoriver.herokuapp.com/" target="_blank">Soporte Técnico River</a></h4>
                <p>Landing Page</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="/img/portfolio-img/fokus.jpg" class="img-fluid" alt="">
                <a href="https://www.facebook.com/FokusPeru/" class="link-details" target="_blank" title="Mas Detalles"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="https://www.facebook.com/FokusPeru/" target="_blank">Fokus +</a></h4>
                <p>Red Social</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/portfolio-img/delamor.jpg" class="img-fluid" alt=""><!--revisar-->
                <a href="img/portfolio-img/delamor-big.jpg" class="link-preview" data-lightbox="portfolio" data-title="Fotografia #1" title="Ver"><i class="ion ion-eye"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="https://www.facebook.com/RegalaDelamor/?__tn__=k*F&tn-str=k*F" target="_blank">Delamor</a></h4>
                <p>Fotografía de Producto</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/portfolio-img/paul-landing.jpg" class="img-fluid" alt="">
                <a href="https://www.youtube.com/watch?v=ilw-qmqZ5zY" target="_blank" class="link-details" title="Mas Detalles"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#" target="_blank">Paul Urbina</a></h4>
                <p>LANDING PAGE</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/chichen-example.jpg" class="img-fluid" alt="">
                <a href="https://www.facebook.com/RegalaDelamor/?__tn__=k*F&tn-str=k*F" class="link-details" target="_blank" title="Mas Detalles"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="https://www.facebook.com/CromoFilmsPeru/" target="_blank">Cromo Films</a></h4>
                <p>Red social</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/chichen-example.jpg" class="img-fluid" alt="">
                <a href="img/chichen-example.jpg" class="link-preview" data-lightbox="portfolio" data-title="Fotografia #2" title="Ver"><i class="ion ion-eye"></i></a>
              </figure>
              <div class="portfolio-info">
                <h4><a href="#">Fotografia #2</a></h4>
                <p>Fotografia</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- #portfolio -->


    </div>
</template>

<style scoped>

#portfolio {
  padding: 60px 0;
}

#portfolio #portfolio-flters {
  padding: 0;
  margin: 5px 0 35px 0;
  list-style: none;
  text-align: center;
}

#portfolio #portfolio-flters li {
  cursor: pointer;
  margin: 15px 15px 15px 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
  border-radius: 4px;
  text-transform: uppercase;
  background: #fff;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

#portfolio #portfolio-flters li:hover,
#portfolio #portfolio-flters li.filter-active {
  background: #18d26e;
  color: #fff;
}

#portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

#portfolio .portfolio-wrap {
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}

#portfolio .portfolio-wrap:hover {
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
}

#portfolio .portfolio-item {
  position: relative;
  height: 380px;
  overflow: hidden;
}

#portfolio .portfolio-item figure {
  background: #000;
  overflow: hidden;
  height: 240px;
  position: relative;
  border-radius: 4px 4px 0 0;
  margin: 0;
}

#portfolio .portfolio-item figure:hover img {
  opacity: 0.4;
  transition: 0.3s;
}

#portfolio .portfolio-item figure .link-preview,
#portfolio .portfolio-item figure .link-details {
  position: absolute;
  display: inline-block;
  opacity: 0;
  line-height: 0;
  text-align: center;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  transition: 0.2s linear;
}

img {
  width: 400px;
  height: 400px;
}

#portfolio .portfolio-item figure .link-preview i,
#portfolio .portfolio-item figure .link-details i {
  padding-top: 6px;
  font-size: 22px;
  color: #333;
}

#portfolio .portfolio-item figure .link-preview:hover,
#portfolio .portfolio-item figure .link-details:hover {
  background: #18d26e;
}

#portfolio .portfolio-item figure .link-preview:hover i,
#portfolio .portfolio-item figure .link-details:hover i {
  color: #fff;
}

#portfolio .portfolio-item figure .link-preview {
  left: calc(50% - 38px);
  top: calc(50% - 18px);
}

#portfolio .portfolio-item figure .link-details {
  right: calc(50% - 38px);
  top: calc(50% - 18px);
}

#portfolio .portfolio-item figure:hover .link-preview {
  opacity: 1;
  left: calc(50% - 44px);
}

#portfolio .portfolio-item figure:hover .link-details {
  opacity: 1;
  right: calc(50% - 44px);
}

#portfolio .portfolio-item .portfolio-info {
  background: #fff;
  text-align: center;
  padding: 30px;
  height: 90px;
  border-radius: 0 0 3px 3px;
}

#portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  line-height: 1px;
  font-weight: 700;
  margin-bottom: 18px;
  padding-bottom: 0;
}

#portfolio .portfolio-item .portfolio-info h4 a {
  color: #333;
}

#portfolio .portfolio-item .portfolio-info h4 a:hover {
  color: #18d26e;
}

#portfolio .portfolio-item .portfolio-info p {
  padding: 0;
  margin: 0;
  color: #b8b8b8;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  img {
    width: 100%;
  }
}


</style>
