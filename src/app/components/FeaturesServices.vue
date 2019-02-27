<template>
        <!--==========================
      Featured Services Section
    ============================-->
    <section id="featured-services">
      <div class="container">
        <div class="row features">

          <div class="col-lg-4 box text-center" v-for="(featur, index) in features" v-bind:key="index.id">
            <i :class="featur.icons"></i>
            <h4 class="title">
              <a href="#" data-toggle="modal" :data-target="featur.data_target">{{featur.title}}</a>
            </h4>
            <!--MODAL-->
            <div class="modal fade" :id="featur.id">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                   <!--MODAL HEADER-->
                 <div class="modal-header" style="background-color: black;">
                   <i :class="featur.icons"></i>  
                   <h4 class="modal-title" style="padding-left: 10px;">
                     <a href="#">
                      {{featur.title}}
                     </a>
                   </h4>
                    <button type="button" class="close" data-dismiss="modal" style="color:#18d26e;">
                      <div style="font-size: 35px;">
                        &times;
                      </div>
                    </button>
                 </div>
                 <!--MODAL BODY-->
                 <div class="modal-body text-center text-justify" v-html="featur.body"></div>
                 <!--MODAL FOOTER-->
                 <div class="modal-footer">
                   <button  type="button" class="btn btn-secondary entendido" data-dismiss="modal">Entendido!</button>
                 </div>
                </div>
              </div>
            </div>
           
          </div>
  
         
<!--REMOVED CLASS QUIT-->
        </div>
      </div>
    </section><!-- #featured-services -->
</template>

<script>
export default {  
  data: function () {
    return {
      features: [
        {
          data_target: '#modalPresencia',
          id: 'modalPresencia',
          icons: 'ion-ios-bookmarks-outline',
          title: 'Presencia Digital',
          body: `
            &#8226; Página Web o landing Page desde 0 <br>
            &#8226; Google My Business <br>
            &#8226; Creación o renovación de presentación de redes sociales (Chat Boots) <br>
          `
        },
        {
          data_target: '#modalTrafico',
          id: 'modalTrafico',
          icons: 'ion-ios-stopwatch-outline',
          title: 'Trafico de usuarios',
          body: `
            &#8226; Página Web, landing Page o E commers desde 0 <br>
            &#8226; Plan de redes sociales ( Chat Boots, formulario) <br>
            &#8226; Plan de Google Adwords ( publicidad y posicionamiento ) <br>
            &#8226; Asesoría y mantenimiento web (mensual)
          `
        },
        {
          data_target: '#modalGeneracion',
          id: 'modalGeneracion',          
          icons: 'ion-ios-heart-outline',
          title: 'Generacion de Clientes Potenciales',
          body: `
              &#8226; Página Web, landing Page o E commers desde 0. <br>
              &#8226; Trafico de usuarios en redes sociales (FB Ads, Chat Boots y formulario) <br>
              &#8226; CEO (posicionamiento web), Google Adwords. <br>
              &#8226; Asesoría y mantenimiento web (mensual)
          `
        }
      ]
    }
  }
}
</script>

<style scoped>

button.entendido {
  background-color: #000;
}

#featured-services.box {
     height: 340px;
 }

#featured-services{
  background: #000;
}

#featured-services .box {
  padding: 30px 20px;
  }


#featured-services i {
  color: #18d26e;
  font-size: 48px;
  display: inline-block;
  line-height: 1;
}

#featured-services h4 {
  font-weight: 400;
  margin: 15px 0;
  font-size: 18px;
}

#featured-services h4 a {
  color: #fff;
}

#featured-services h4 a:hover {
  color: #18d26e;
}

</style>
