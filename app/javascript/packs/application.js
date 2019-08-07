/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// console.log('Hello World from Webpacker')

// import the Vue object
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// import the base app component..  Note that I modified the directory 
// structure and location of files a bit to fit what I like...
// all my components in a single components/ folder.  So,
// I created javascript/components/ and I moved the app.vue file into it.
import App from '../components/app.vue'
import HelloWorld from '../components/helloworld.vue'

// there are several ways to register components for use...I'm going to 
// register them here globally and name them with my own convention of 
// "-component"
Vue.component('app-component', App)
Vue.component('hello-world-component', HelloWorld)

// Now we need to create the Vue object and tell it to bind to the
// html element we've created in the application.html.erb template.  We'll
// do that by adding an event listener that will trigger the Vue object
// creation when the page's DOM is finished loading.
document.addEventListener('DOMContentLoaded', () => {
  const vue_app = new Vue({
    el: 'div#vue-target',
    vuetify: new Vuetify
  })
})