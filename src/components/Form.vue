<template>
 <v-container>
     <v-form> 
    <v-text-field
      prepend-icon="mdi-folder"
      @keyup="submitFunc"
      label="title"
      v-model="title"
    ></v-text-field>
    <div class="errors" v-if="titleValidate">
      <span>{{ titleValidate }}</span>
    </div>
    <v-textarea
      no-resize
      label="description"
      v-model="description"
      prepend-icon="mdi-edit"

    ></v-textarea>
    <v-text-field
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show2 ? 'text' : 'password'"
      name="input-10-2"
      label="Visible"
      hint="At least 8 characters"
      value="wqfasds"
      class="input-group--focused"
      @click:append="show2 = !show2"
    ></v-text-field>
    <v-btn @submit.prevent="submitFunc" type="submit" color="primary"
      >Submit</v-btn
    >
  </v-form>
   <div class="img">
    <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" alt="" width="350">
    <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.img"
                height="225px"
              >
                <v-card-title class="text-h6 white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                        {{ item.text }}
                      </p>
                      <p class="text-caption font-weight-medium font-italic text-left">
                        {{ item.subtext }}
                      </p>
                    </div>

                    <div class="align-self-center">
                      <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        :color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                        >
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
  </div>
 
  </v-container>
 
 
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      title: "",
      description: "",
      titleValidate: "",
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) =>
          (value && value.length >= 8) || "Min 8 characters." || "",
      },

    };
  },
  methods: {
    submitFunc() {
      // validate title
      if (this.title.length < 5) {
        this.titleValidate = "Title must be at least 5 characters";
        return;
      } else if (this.title.length > 10) {
        this.titleValidate = "Title must be less than 10 characters";
        return;
      } else {
        this.titleValidate = "";
      }
    },
  },
};
</script>
<style lang="scss">
.v-form {
  background: #fafafa;
  padding: 20px;
  border-radius: 5px;
}
.v-btn {
  margin-top: 20px;
  &:hover {
    background-color: red;
  }
  &:focus {
    background-color: red;
  }
}
.errors {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
