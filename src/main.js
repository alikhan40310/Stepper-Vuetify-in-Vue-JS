import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Router from 'vue-router'
import PersonalityIntroduction from "./views/Introduction.vue";
import PersonalityEvaluation from "./views/Result.vue";
import StepperQuestion from "./views/Stepperquestion.vue";


Vue.use(Router);

const routes = [
  { path: "", component: PersonalityIntroduction },
  { path: "/question", component: StepperQuestion },

  { path: "/result/:id", component: PersonalityEvaluation },
];

const router = new Router({
  routes
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
