<template>
  <v-container>
    <v-app>
       
     

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