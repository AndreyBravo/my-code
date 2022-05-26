import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZHWl_w1vWsDJyxb9jl2mEyglDGXULBHQ",
  authDomain: "myauth-2258b.firebaseapp.com",
  projectId: "myauth-2258b",
  storageBucket: "myauth-2258b.appspot.com",
  messagingSenderId: "1007523226485",
  appId: "1:1007523226485:web:0cc52bb9c3d9f6204b293c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Vue.config.productionTip = false;

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
