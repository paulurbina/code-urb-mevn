<template>
  <div>
    <section id="clients" class="wow fadeInUp">
      <div class="container">
        <header class="section-header">
          <h3>Nuestros Clientes</h3>
        </header>

        <div class="owl-carousel clients-carousel">
          <img
            srcset="img/clients/cromo_w95.png 95w,
                  img/clients/cromo_w130.png 130w"
            sizes="(max-width:400px) 95px,
                   (max-width:900px) 130px"
            src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1551244396/systemurb-assets/clients/cromo.png" alt="">
          <img 
            srcset="img/clients/delamor_w95.png 95w,
                    img/clients/delamor_w130.png 130w"
            sizes="(max-width:400px) 95px,
                   (max-width:900px) 130px"
            src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1551244396/systemurb-assets/clients/delamor.png" alt="">
          <img
            srcset="img/clients/striver_w95.png 95w,
                    img/clients/striver_w130.png 130w"
            sizes="(max-width:400px) 95px,
                   (max-width:900px) 130px"
            src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1551244395/systemurb-assets/clients/striver.png" alt="">
          <img 
            srcset="img/clients/fokus_w95.png 95w,
                    img/clients/fokus_w130.png 130w"
            sizes="(max-width:400px) 95px,
                   (max-width:900px) 130px"
            src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1551244395/systemurb-assets/clients/fokus.png" alt="">
        </div>
      </div>
    </section>
    <!-- #clients -->
  </div>
</template>

<style scoped>

#clients {
  padding: 60px 0;
}

#clients img {
  max-width: 100%;
  opacity: 0.5;
  transition: 0.3s;
  padding: 15px 0;
}

#clients img:hover {
  opacity: 1;
}

#clients .owl-nav,
#clients .owl-dots {
  margin-top: 5px;
  text-align: center;
}

#clients .owl-dot {
  display: inline-block;
  margin: 0 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
}

#clients .owl-dot.active {
  background-color: #18d26e;
}
</style>
