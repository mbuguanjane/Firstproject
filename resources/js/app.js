/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import { Form} from 'vform'
window.Form=Form;

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let routes=[{path:'/Dashboard',component:require('./components/ExampleComponent.vue').default}]

const router =new VueRouter({
    routes,
    mode:'history'
})

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    data: () => ({
        form: new Form({
          username: '',
          password: ''
        })
      }),
    
      methods: {
        async login () {
          const response = await this.form.post('/api/login')
          // ...
        }
      }
});
