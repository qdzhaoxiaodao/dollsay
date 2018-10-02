// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue';
import router from './router'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});