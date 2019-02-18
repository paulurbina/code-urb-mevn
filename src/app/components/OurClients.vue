<template>
  <div>
    <section id="clients" class="wow fadeInUp">
      <div class="container">
        <header class="section-header">
          <h3>Our Clients</h3>
        </header>

        <div class="owl-carousel clients-carousel">
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-1.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-8.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-3.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-7.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-6.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-4.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-5.png" alt>
          <img src="https://res.cloudinary.com/dxbxsfubt/image/upload/v1550526493/systemurb-assets/clients/client-2.png" alt>
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
