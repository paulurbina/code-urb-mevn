<template>
  <div>
    <!--==========================
      Contact Section
    ============================-->
    <section id="contact" class="section-bg wow fadeInUp">
      <div class="container">
        <div class="section-header">
          <h3>Contactenos</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row contact-info">
          <div class="col-md-4">
            <div class="contact-address">
              <i class="ion-ios-location-outline"></i>
              <h3>Dirección</h3>
              <address>Lomas de los Lirios N#130 1# piso Surco - Lima</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Numero de teléfono</h3>
              <p>
                <a href="tel:+51920484285">+51 920 484 285</a>
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:systemurb@gmail.com">systemurb@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div class="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form @submit.prevent="sendUser()" role="form" class="contactForm">
            
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"

                  v-model="user.name"
                  v-validate="'required'"
                  :class="{'danger': errors.has('name')}"

                  class="form-control"
                  id="name"
                  placeholder="Nombre"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                >
                <div v-show="errors.has('name')" class="danger-message">{{ errors.first('email') }}</div>
              </div>

              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="user.email"
                  id="email"
                  placeholder="Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                >
              </div>
              <div class="validation"></div>


            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                v-model="user.subject"
                id="subject"
                placeholder="Tema"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              >
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                v-model="user.message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Mensaje"
              ></textarea>
              <div class="validation"></div>
            </div>
            <div class="text-center">
              <button>Enviar Mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- #contact -->
  
  
  </div>


  
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Veevalidate from 'vee-validate';
Vue.use(BootstrapVue);
Vue.use(Veevalidate);

//Validacion personalizada
// VeeValidate.Validator.extend('passphrase', {
//     getMessage: field => 'Sorry dude, wrong pass phrase.',
//     validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
// });


class User {
  constructor(name = null, email = null, subject = null, message = null) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}

export default {
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    sendUser(e) {
        
        this.$validator.validateAll();
          //   fetch("/", {
          //   method: "POST",
          //   body: JSON.stringify(this.user),
          //   headers: {
          //     Accept: "application/json",
          //     "Content-Type": "application/json"
          //   }
          // })
          //   .then(res => res.json())
          //   .then(data => {
          //     this.user = new User();
          //   });
        }  
    },
};
</script>

<style scoped>
.danger-message {
	color: red;
}

.danger {
	border: 1px solid red;
}
</style>







