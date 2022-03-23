<template>
  <v-row>
    <v-col v-for="n in image" :key="n" class="d-flex child-flex" cols="4">
      <v-img
        :src="
          n.img
        "
        :lazy-src="n.img"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      image: [
        {
          img: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        

      ],
    };
  },
};
</script>
