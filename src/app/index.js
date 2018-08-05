import Vue from 'vue';
import App from './App.vue';
import 'animate.css';

// Bootstrap compiled options
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

new Vue({
    render: h => h(App)
}).$mount('#app');