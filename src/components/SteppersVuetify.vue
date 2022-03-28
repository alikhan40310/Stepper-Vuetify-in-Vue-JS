<template>
  <v-stepper v-model="e1" class="mt-10">
    <v-stepper-header>
      <v-stepper-step
        :complete="question === index + 1"
        v-for="(question, index) in questions"
        :key="index"
        :step="index + 1"
      >
        Question no {{ index + 1 }}
        <v-divider></v-divider>
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content 
        v-for="(question, index) in questions"
        :key="index"
        :step="index + 1"
      >
        <h2 class="heading-style">
          {{ question["question"] }}
        </h2>

        <div v-for="(answer, ansindex) in question.answers" :key="ansindex">
          <input
            :id="ansindex"
            type="radio"
            :value="answer"
            name="answer"
            v-model="selectedAnswer"
            class="radioStyle"
          />
          <label :for="ansindex">{{ answer }}</label>
        </div>

        <v-btn class="mt-4" color="primary" @click="e1 = index + 2">
          Continue
        </v-btn>

        <v-btn class="mt-4" text @click="backFunc"> Back </v-btn>
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
      questions: [
        {
          question:
            "Q1. You’re really busy at work and a colleague is telling you their life story and personal woes. You:Q1. Who create python language?",
          answers: [
            "Don’t dare to interrupt them",
            "Think it’s more important to give them some of your time; work can wait",
            "Listen, but with only with half an ear",
            "Interrupt and explain that you are really busy at the moment",
          ],
          correctAnswer: "a",
        },
        {
          question:
            "Q2. You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          answers: [
            "Look at your watch every two minutes",
            "Bubble with inner anger, but keep quiet",
            "Explain to other equally impatient people in the room that the doctor is always running late",
            "Complain in a loud voice, while tapping your foot impatiently",
          ],
          correctAnswer: "c",
        },
        {
          question:
            "Q3. You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          answers: [
            "Don’t dare contradict them",
            "Think that they are obviously right",
            "Defend your own point of view, tooth and nail",
            "Continuously interrupt your colleague",
          ],
          correctAnswer: "a",
        },
        {
          question:
            "Q4. You are taking part in a guided tour of a museum. You:",
          answers: [
            "Are a bit too far towards the back so don’t really hear what the guide is saying",
            "Follow the group without question",
            "Make sure that everyone is able to hear properly",
            "Are right up the front, adding your own comments in a loud voice",
          ],
          correctAnswer: "a",
        },
        {
          question:
            "Q5. During dinner parties at your home, you have a hard time with people who:",
          answers: [
            "Ask you to tell a story in front of everyone else",
            "Talk privately between themselves",
            "Hang around you all evening",
            "Always drag the conversation back to themselves",
          ],
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
  },
};
</script>

<style>
.text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.v-stepper {
}
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 1px -2px transparent;
  /* outline: none;  */
  -webkit-box-shadow: 0px 3px 1px -2px transparent;
  /* background: red; */
}
.v-stepper__content {
  /* box shadow transparent */
  box-shadow: 0px 3px 1px -2px transparent;
}
.radioStyle {
  margin-right: 10px;
  font-size: 21rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  accent-color: #2196f3;
  margin-top: 0.5rem;
}
label {
  font-size: 1.2rem;
}
.heading-style {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
