<template>
  <v-card>
    
    <v-flex d-flex flex-column align-center  justify-center style="height:100vh;">
      <h3 style="font-weight:normal;font-size:28px; margin-bottom:1rem;" >Introverts enjoy people-watching. Extroverts enjoy people watching - Jonny Sun</h3>
      <h2 style="font-weight:600;font-size:2.5rem; margin-bottom:1rem;">ARE YOU INTROVERT OR EXTROVERT?</h2>
      <v-btn color="warning" style="color:black; background-color:blue;text-transform:capitalize;" x-large  class="mt-2  px-8" @click="routerOpen">Let's Start</v-btn>

  
    </v-flex>
  
  </v-card>
</template>

<script>
export default {
  name: 'PersonalityIntroduction',
  data() {
    return {
      title: "",
    }
  },
  methods: {
    routerOpen() {
      this.$router.push('/question');

      // this.$router.push('/PersonalityQuestion');
    },

  },
}
</script>

<style > 
body {
  background-color: #383843 !important;
}
.v-main {
  background-color: #383843 !important;
}
.v-card {
  background-color: transparent !important;
  max-width: 70%;
  box-shadow: 0 0 0 0 transparent !important;
  color: white !important;
}
.v-card{
  justify-content: center;
  align-items: center;
  display: flex;
}
.introbtn {
  background-color: #383843 !important;
  color: white !important;
  padding: 100px;
}
</style>