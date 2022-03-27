<template>
  <v-stepper v-model="e1" class=""  >
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Question no 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Question no 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Question no 3
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        Question no 4
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">
        Question no 4
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" v-if="index < count">
        <div v-for="(answer, key) in questions[index]['answers']" :key="key">
          <p class="text-2xl font-bold">
            {{ questions[index]["question"] }}
          </p>

          <v-radio
            :label=" answer"
            class="hidden"
            :value="key"
            @change="answered($event)"
            v-model="selectedAnswer"
            :disabled="selectedAnswer != ''"
          ></v-radio>
        </div>
        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card>
          <h1 class="text">
            You’re really busy at work and a colleague is telling you their life
            story and personal woes. You:
          </h1>
          <v-radio-group v-model="column" column>
            <v-radio
              label="  Don’t dare to interrupt them  "
              value="second-1"
            ></v-radio>
            <v-radio
              label="Think it’s more important to give them some of your time; work can wait  "
              value="second-2"
            ></v-radio>
            <v-radio
              label=" Listen, but with only with half an ear  "
              value="second-3"
            ></v-radio>
            <v-radio
              label="  Interrupt and explain that you are really busy at the moment  "
              value="second-4"
            ></v-radio>
          </v-radio-group>
        </v-card>
        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <h1 class="text">
            You are taking part in a guided tour of a museum. You:
          </h1>
          <v-radio-group v-model="column" column>
            <v-radio
              label="Are a bit too far towards the back so don’t really hear what the guide is saying "
              value="third-1"
            ></v-radio>
            <v-radio
              label="Follow the group without question "
              value="third-2"
            ></v-radio>
            <v-radio
              label=" Make sure that everyone is able to hear properly  "
              value="third-3"
            ></v-radio>
            <v-radio
              label="Are right up the front, adding your own comments in a loud voice "
              value="third-4"
            ></v-radio>
          </v-radio-group>
        </v-card>
        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card>
          <h1 class="text">
            During dinner parties at your home, you have a hard time with people
            who:
          </h1>
          <v-radio-group v-model="column" column>
            <v-radio
              label=" Ask you to tell a story in front of everyone else "
              value="fourth-1"
            ></v-radio>
            <v-radio
              label=" Talk privately between themselves "
              value="fourth-2"
            ></v-radio>
            <v-radio
              label="Hang around you all evening  "
              value="fourth-3"
            ></v-radio>
            <v-radio
              label="Always drag the conversation back to themselves  "
              value="fourth-4"
            ></v-radio>
          </v-radio-group>
        </v-card>
        <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

        <v-btn text @click="backFunc"> Back </v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card>
          <h1 class="text">
            You crack a joke at work, but nobody seems to have noticed. You:
          </h1>
          <v-radio-group v-model="column" column>
            <v-radio
              label=" Think it’s for the best — it was a lame joke anyway  "
              value="fivth-1"
            ></v-radio>
            <v-radio
              label="Wait to share it with your friends after work  "
              value="fivth-2"
            ></v-radio>
            <v-radio
              label="Try again a bit later with one of your colleagues  "
              value="fivth-3"
            ></v-radio>
            <v-radio
              label=" Keep telling it until they pay attention "
              value="fivth-4"
            ></v-radio>
          </v-radio-group>
        </v-card>
        <v-btn color="primary" @click="e1 = 6"> Continue </v-btn>

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
      index: 0,
      selectedAnswer: "",
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 3,
      questions: [
        {
          question: "Q1. Who create python  language?",
          answers: {
            a: "Guido van Rossum",
            b: "Kristen Nygaard",
            c: "Bjarne Stroustrup",
            d: "Ole-Johan Dahl",
          },
          correctAnswer: "a",
        },
        {
          question: "Q2. What does PEP stand for in python?",
          answers: {
            a: "name of parentehes parameters",
            b: "python english processing",
            c: "Python Enhancement Proposal",
            d: "PyPi",
          },
          correctAnswer: "c",
        },
        {
          question: "Q3. What are python modules?",
          answers: {
            a: "Are .py files with executable code",
            b: "Python packages",
            c: "Python list objects",
            d: "Python packages",
          },
          correctAnswer: "a",
        },
      ],
    };
  },
  methods: {
    backFunc() {
      if (this.e1 > 1) {
        this.e1--;
      }
    },

    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
  },
};
</script>

<style>
.text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.v-stepper{
}
.v-sheet.v-stepper:not(.v-sheet--outlined){
  box-shadow:0px 3px 1px -2px transparent;
  /* outline: none;  */
  -webkit-box-shadow: 0px 3px 1px -2px transparent;
  /* background: red; */
}
.v-stepper__content{
  /* box shadow transparent */
  box-shadow: 0px 3px 1px -2px transparent;
}
</style>
