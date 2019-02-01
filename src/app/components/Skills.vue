<template>
     <div>
        <!--==========================
      Skills Section
    ============================-->
    <section id="skills">
      <div class="container">

        <header class="section-header">
          <h3>Nuestras habilidades</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </header>

        <div class="skills-content">

          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">HTML <i class="val">100%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">CSS <i class="val">90%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">Fotografia y Video <i class="val">80%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">JavaScript <i class="val">65%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">Abobe <i class="val">55%</i></span>
            </div>  
          </div>

        </div>

      </div>
    </section>
     </div>
</template>

<style scoped>

#skills {
  padding: 60px 0;
}

#skills .progress {
  height: 35px;
  margin-bottom: 10px;
}

#skills .progress .skill {
  font-family: "Open Sans", sans-serif;
  line-height: 35px;
  padding: 0;
  margin: 0 0 0 20px;
  text-transform: uppercase;
}

#skills .progress .skill .val {
  float: right;
  font-style: normal;
  margin: 0 20px 0 0;
}

#skills .progress-bar {
  width: 1px;
  text-align: left;
  transition: .9s;
}

</style>
