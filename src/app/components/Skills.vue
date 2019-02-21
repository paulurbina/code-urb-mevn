<template>
     <div>
        <!--==========================
      Skills Section
    ============================-->
    <section id="skills">
      <div :class="'container'">

        <header class="section-header pb-5">
          <h3>{{titulo}}</h3>
        </header>

        <div class="skills-content">
          <div class="progress" v-for="(progress, index) in progressions" v-bind:key="index.id">
            <div :class="['progress-bar', progress.bg]" role="progressbar" :aria-valuenow="progress.valuenow" aria-valuemin="0" aria-valuemax="100">
              <span :class="'skill'" v-if="progress.skill !== 'Photoshop'">{{progress.skill}} <i class="val">{{progress.val}}</i></span>
              <span :class="'skill'" v-if="progress.skill == 'Photoshop'">
                {{progress.skill}} <span class="premier">| PREMIER</span> <span class="ilustrator">| ILLUSTRATOR</span> <i class="val">{{progress.val}}</i>
              </span>            
            </div>
          </div>
        </div>

      </div>
    </section>
     </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: 'Nuestras habilidades',
      progressions: [
        {
          bg: 'bg-success',
          valuenow: '100',
          skill: 'HTML5',
          val: '100%'
        },
        {
          bg: 'bg-info',
          valuenow: '90',
          skill: 'CSS3',
          val: '90%'
        },
        {
          bg: 'bg-secondary',
          valuenow: '80',
          skill: 'Fotografia y Video ',
          val: '80%'
        },
        {
          bg: 'bg-warning',
          valuenow: '65',
          skill: 'JavaScript (EMC7) ',
          val: '65%'
        },
        {
          bg: 'bg-danger',
          valuenow: '55',
          skill: 'Photoshop',
          val: '55%'
        },
      ],
    }
  },
}
</script>


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
