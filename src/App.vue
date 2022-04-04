<template>
  <v-container>
    <v-app>
      <v-main>
        <!-- <HelloWorld />
        <Form />-->
        <!-- <SteppersVuetify /> -->
        <!-- <PersonalityIntroduction /> -->
        
        <router-view></router-view>
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import component form
// import Form from "./components/Form";
// import steppersvuetify
// import SteppersVuetify from "./components/SteppersVuetify";
// import PersonalityIntroduction from "./views/Introduction";


export default {
  name: "App",

  components: {
    // HelloWorld,
    // Form,
    // SteppersVuetify,
    // PersonalityIntroduction,

  },

  data: () => ({
    //
  }),
};
</script>
<style>
.containers {

}
</style>