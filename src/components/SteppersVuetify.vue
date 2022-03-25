<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Question no 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Question no 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Question no 3 </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Question no 4
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        Question no 5
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card>
          <h1 class="text">
            You’ve been sitting in the doctor’s waiting room for more than 25
            minutes. You:
          </h1>
          <v-radio-group v-model="column" column>
            <v-radio
              label=" Look at your watch every two minutes "
              value="radio-1"
            ></v-radio>
            <v-radio
              label="Bubble with inner anger, but keep quiet "
              value="radio-2"
            ></v-radio>
            <v-radio
              label="Explain to other equally impatient people in the room that the doctor is always running late  "
              value="radio-3"
            ></v-radio>
            <v-radio
              label=" Complain in a loud voice, while tapping your foot impatiently "
              value="radio-4"
            ></v-radio>
          </v-radio-group>
        </v-card>
        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    backFunc() {
      if (this.e1 > 1) {
        this.e1--;
      }
    },
  },
};
</script>

<style></style>
