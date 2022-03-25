<template>
  <v-container>
    <v-app>
      
      <v-app-bar app  color="primary" class="containers" :class="containers" dark width="100%" >

        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down co"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <v-btn href="#" target="_blank" text>
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        
      </v-app-bar>

      <v-main>
        <!-- <HelloWorld />
        <Form /> -->
        <SteppersVuetify />
      </v-main>
    </v-app>
  </v-container>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import component form
// import Form from "./components/Form";
// import steppersvuetify
import SteppersVuetify from "./components/SteppersVuetify";


export default {
  name: "App",

  components: {
    // HelloWorld,
    // Form,
    SteppersVuetify,
    
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  .containers{
    background: coral;
    max-width: 70%;
  }
</style>