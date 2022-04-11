<template>
  <v-card>
    <v-flex d-flex flex-column align-center justify-center style="height:100vh;">
      <h3 style="font-size:30px;" class="font-weight-light mb-3 text-center">Introverts enjoy people-watching.
        Extroverts enjoy people watching - Jonny Sun</h3>
      <h2 style="font-size:33px;" class="font-weight-bold mb-3 text-center">ARE YOU INTROVERT OR EXTROVERT?</h2>
      <v-btn color="warning" x-large class="mt-2 px-8 text-capitalize" @click="questionRoute">Let's Start</v-btn>
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
    questionRoute() {
      this.$router.push('/question');
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

.v-card {
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