<template>
  <v-card v-if="this.message > 15" style="display:flex;flex-direction:column;">
    <h2></h2>

    <v-flex d-flex flex-column align-center justify-center style="height:100vh;">
      <h3
        style="font-weight:normal;font-size:28px; margin-bottom:1rem;text-align:center;"
      >Extroversion is an enormously appealing personality style, but we've turned it into an oppressive standard to which most of us feel we must conform. - Susan Cain</h3>
      <h2 style="font-weight:600;font-size:2.5rem; margin-bottom:1rem;">YOU'RE AN EXTROVERT</h2>
      <v-btn color="warning" style="color:black; background-color:blue;text-transform:capitalize;" x-large  class="mt-2  px-8" @click="routerOpen">Let's Evaluate</v-btn>
    </v-flex>
  </v-card>

  <v-card v-else style="display:flex;flex-direction:column;">
    <v-flex d-flex flex-column align-center justify-center style="height:100vh;">
      <h3
        style="font-weight:normal;font-size:28px; margin-bottom:1rem;text-align:center;"
      >Introverts live in two worlds: We visit the world of people, but solitude and the inner world will always be our home. - Jenn Granneman</h3>
      <h2 style="font-weight:600;font-size:2.5rem; margin-bottom:1rem;">YOU'RE AN INTROVERT</h2>
      <v-btn color="warning" style="color:black; background-color:blue;text-transform:capitalize;" x-large  class="mt-2  px-8" @click="routerOpen">Let's Evaluate</v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "PersonalityEvaluation",
  data() {
    return {
      title: "",
      message: this.$route.params.id,
    }
  },
  methods: {
    routerOpen() {
      this.$router.push('/');
    },
  }
}
</script>

<style>
</style>