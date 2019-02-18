<template>
     <div>
        <!--==========================
      Skills Section
    ============================-->
    <section id="skills">
      <div class="container">

        <header class="section-header pb-5">
          <h3>Nuestras habilidades</h3>
        </header>

        <div class="skills-content">

          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">HTML5 <i class="val">100%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">CSS3 <i class="val">90%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">Fotografia y Video <i class="val">80%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">JavaScript (EMC7) <i class="val">65%</i></span>
            </div>
          </div>

          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
              <span class="skill">PHOTOSHOP <span class="premier">| PREMIER</span> <span class="ilustrator">| ILLUSTRATOR</span> <i class="val">55%</i></span>
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

@media (max-width: 770px) {
  span.skill {
    font-size: 10px;
  }
  span.ilustrator {
    display: none;
  }
}

@media (max-width: 330px) {
  span.premier {
    display: none;
  }
}

</style>
