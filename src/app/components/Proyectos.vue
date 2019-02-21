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
          <div :class="[allclass, proyect.filter]" :data-wow-delay="proyect.delay" v-for="proyect in proyects" v-bind:key="proyect.id">
            <div class="portfolio-wrap">
              <figure> 
                <img :src="proyect.image" class="img-fluid" alt="">
                <a :href="proyect.open" v-on:click="openImage" class="link-details" title="Mas detalles" target="_blank"><i :class="proyect.icon"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a :href="proyect.link" target="_blank">{{proyect.titulo}}</a></h4>
                <p>{{proyect.type}}</p>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section><!-- #portfolio -->


    </div>
</template>

<script>
export default {
  data: function () {
    return {
      allclass: 'col-lg-4 col-md-6 portfolio-item wow fadeInUp',
      proyects: [
        {
          filter: 'filter-web',
          delay: "0.1s",
          image: '/img/portfolio-img/str1.jpg',
          icon: 'ion ion-android-open',
          open: 'https://serviciotecnicoriver.herokuapp.com/',
          link: 'https://serviciotecnicoriver.herokuapp.com/',
          titulo: 'Soporte Técnico River',
          type: 'Landing Page'
        },
        {
          filter: 'filter-app',
          delay: '0.2s',
          image: '/img/portfolio-img/fokus.jpg',
          icon: 'ion ion-android-open',
          open: 'https://www.facebook.com/FokusPeru/',
          link: 'https://www.facebook.com/FokusPeru/',
          titulo: 'Fokus +',
          type: 'Red social'
        },
        {
          filter: 'filter-card',
          delay: '0.3s',
          image: 'img/portfolio-img/delamor.jpg',
          icon: 'ion ion-eye',
          open: 'img/portfolio-img/delamor-big.jpg',
          link: 'https://www.facebook.com/RegalaDelamor/?__tn__=k*F&tn-str=k*F',
          titulo: 'Delamor',
          type: 'Fotografía de Producto'
        },
        {
          filter: 'filter-web',
          delay: '0.1s',
          image: 'img/portfolio-img/paul-landing.jpg',
          icon: 'ion ion-android-open',
          link: 'https://www.youtube.com/watch?v=ilw-qmqZ5zY',
          titulo: 'Paul Urbina',
          type: 'LANDING PAGE'
        },
        {
          filter: 'filter-app',
          delay: '0.2s',
          image: 'img/chichen-example.jpg',
          icon: 'ion ion-android-open',
          open: 'https://www.facebook.com/CromoFilmsPeru/',
          link: 'https://www.facebook.com/CromoFilmsPeru/',
          titulo: 'Cromo Films',
          type: 'Red social'
        },
        {
          filter: 'filter-card',
          delay: '0.1s',
          image: 'img/chichen-example.jpg',
          icon: 'ion ion-eye',
          open: 'img/chichen-example.jpg',
          link: 'https://www.youtube.com/watch?v=05dcxPp62BQ',
          titulo: 'Fotografia #2',
          type: 'Fotografia'
        }
      ],
      }
  },
  // methods: {
  //   openImage: function () {
  //     const open = this.proyects.open.substr(0,3);
  //     if(open === 'img') {
  //        var element = document.getElementsByClassName('link-details');
  //        element.setAttribute('target', '');
  //     }
  //   }
  // }
}
</script>


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
