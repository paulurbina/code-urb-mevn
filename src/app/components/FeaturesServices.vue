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
                 <div class="modal-header">
                   <h4 class="modal-title">
                     {{featur.title}}
                   </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                 </div>
                 <!--MODAL BODY-->
                 <div class="modal-body">
                   {{featur.body}}
                 </div>
                 <!--MODAL-->
                 <div class="modal-footer">
                   <button  type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
          body: 'Modal Body..'
        },
        {
          data_target: '#modalTrafico',
          id: 'modalTrafico',
          icons: 'ion-ios-stopwatch-outline',
          title: 'Trafico de usuarios',
          body: 'Modal body..'
        },
        {
          data_target: '#modalGeneracion',
          id: 'modalGeneracion',          
          icons: 'ion-ios-heart-outline',
          title: 'Generacion de Clientes Potenciales',
          body: 'Modal body...'
        }
      ]
    }
  }
}
</script>


<style scoped>
#featured-services.box {
     height: 340px;
 }

#featured-services {
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

#featured-services p {
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 0;
}

</style>
