<template>
  <div>
    <!--==========================
      Contact Section
    ============================-->
    <section id="contact" class="section-bg wow fadeInUp">
      <div class="container"> 
        <div class="section-header">
          <h3>Contactenos</h3>
          <p>Hola! estás interesad@ en iniciar un proyecto digital con nosotros, pues déjanos un mensaje para poder ayudarte</p>
        </div>

        <div class="row contact-info">
          <div class="col-md-4">
            <div class="contact-address">
              <i class="ion-ios-location-outline"></i>
              <h3>Dirección</h3>
              <address>Lomas de los Lirios N#130 Surco - Lima</address>
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
          <form @submit.prevent="sendUser()" class="contactForm" autocomplete="off">
            
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  v-model="user.name"
                  v-validate="{ required: true, min: 5 }"
                  :class="{ 'is-invalid': submitted && errors.has('name') }"
                  class="form-control"
                  id="name"
                  placeholder="Nombre"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                >
              <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
              </div>

              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="user.email"
                  v-validate="'required||email'"
                  :class="{ 'is-invalid': submitted && errors.has('email')}"
                  id="email"
                  placeholder="Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                >
              <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
              </div>


            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                v-model="user.subject"
                v-validate="{ required: true, min: 5 }"
                :class="{ 'is-invalid': submitted && errors.has('subject')}"
                id="subject"
                placeholder="Tema"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              >
              <div v-if="submitted && errors.has('subject')" class="invalid-feedback">{{ errors.first('subject') }}</div>
            </div>

            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                v-model="user.message"
                v-validate="{ required: true, min:5 }"
                :class="{ 'is-invalid': submitted && errors.has('message')}"                
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Mensaje"
              ></textarea>
              <div v-if="submitted && errors.has('message')" class="invalid-feedback">{{ errors.first('message') }}</div>
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

import swal from 'sweetalert';// https://github.com/t4t5/sweetalert

class User {
  constructor(name = '', email = '', subject = '', message = '') {
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
      submitted: false
    }
  },
  methods: {
    sendUser(e) {
      this.submitted = true;
      if (this.user.name <= 5 && this.user.subject <= 5 && this.user.message <= 5) {
        this.submitted = true;
      }
      if (this.user.name === '' && this.user.subject === '' && this.user.message === '') {
        this.submitted = true;
      }
      if (!this.validEmail(this.user.email)) {
        this.submitted = true;
      } 
      else {
        this.$validator.validate().then(valid => {
          if (valid) {
            // alert('sucess!' + JSON.stringify(this.user))
            //send Data user
            fetch("/", {
              method: "POST",
              body: JSON.stringify(this.user),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            })
            .then(res => res.json())
            .then(data => {
              this.user = new User();
            });
            this.submitted = false;
            swal("Gracias!", "Tus datos han sido enviados", "success");
          } else {
            this.submitted = true;
          }
        });
      }

    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
   },

};
</script>

<style scoped>
/* Contact Section
--------------------------------*/

#contact {
  padding: 60px 0;
}

#contact .contact-info {
  margin-bottom: 20px;
  text-align: center;
}

#contact .contact-info i {
  font-size: 48px;
  display: inline-block;
  margin-bottom: 10px;
  color: #18d26e;
}

#contact .contact-info address,
#contact .contact-info p {
  margin-bottom: 0;
  color: #000;
}

#contact .contact-info h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
}

#contact .contact-info a {
  color: #000;
}

#contact .contact-info a:hover {
  color: #18d26e;
}

#contact .contact-address,
#contact .contact-phone,
#contact .contact-email {
  margin-bottom: 20px;
}

#contact .form #sendmessage {
  color: #18d26e;
  border: 1px solid #18d26e;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#contact .form input,
#contact .form textarea {
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
}

#contact .form button {
  background: #18d26e;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

#contact .form button:hover {
  background: #13a456;
}

/*--------------------------------------------------------------
# Responsive Media Queries
--------------------------------------------------------------*/


@media (min-width: 768px) {
  #contact .contact-address,
  #contact .contact-phone,
  #contact .contact-email {
    padding: 20px 0;
  }

  #contact .contact-phone {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
}


</style>
