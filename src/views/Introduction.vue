<template>
  <v-card>
    dfsa
    <v-flex d-inline-flex>
      <v-btn color="primary" dark class="mb-2" @click="routerOpen">Let's Start</v-btn>
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

<style>
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
</style>