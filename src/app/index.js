import Vue from 'vue';
import App from './App.vue';

// Vue Bootstrap
import Bootstrap from 'bootstrap-vue';
Vue.use(Bootstrap);

// Vue vee-validate
import Veevalidate from 'vee-validate';
Vue.use(Veevalidate);


new Vue({
    render: h => h(App)
}).$mount('#app');