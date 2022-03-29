<template>
  <v-stepper v-model="e1" class="CusStyle">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > index + 1"
        v-for="(question, index) in questions"
        :key="index"
        :step="index + 1"
        color="#7b3aec"
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
        <h2>Question {{ index + 1 }}</h2>

        <h2 class="heading-style">
          {{ question["question"] }}
        </h2>

        <div v-for="(answer, ansindex) in question.answers" :key="ansindex">
          <input
            :id="ansindex"
            type="radio"
            :value="answer.value"
            name="answer"
            v-model="question.selectedAns"
            class="radioStyle"
            @change="gettingValue"
          />
          <label :for="ansindex">{{ answer.option }}</label>
        </div>
        <v-btn class="mt-4 mr-4" color="pink" text @click="backFunc">
          Back
        </v-btn>
        <v-btn
          v-model="nextButton"
          class="mt-4"
          @click="nextFunc"
          color="#7b3aec"
          v-if="index !== 4"
          :disabled="disabled"
        >
          Next
        </v-btn>

        <v-btn
          v-model="finishButton"
          class="mt-4 ml-4"
          @click="finishFunc"
          color="#7b3aec"
          v-if="index === 4"
        >
          Finish
        </v-btn>
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
      ValueArray: [],
      nextButton: false,
      disabled: true,
      finishButton: "",
      result: 0,
      questions: [
        {
          question:
            "You’re really busy at work and a colleague is telling you their life story and personal woes. You:Q1. Who create python language?",
          selectedAns: "",
          answers: [
            { option: "Don’t dare to interrupt them", value: 10 },
            {
              option:
                "Think it’s more important to give them some of your time; work can wait",
              value: 2,
            },
            { option: "Listen, but with only with half an ear", value: 3 },
            {
              option:
                "Interrupt and explain that you are really busy at the moment",
              value: 4,
            },
          ],
        },
        {
          question:
            "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          selectedAns: "",
          answers: [
            { option: "Look at your watch every two minutes", value: 1 },
            { option: "Bubble with inner anger, but keep quiet", value: 2 },
            {
              option:
                "Explain to other equally impatient people in the room that the doctor is always running late",
              value: 3,
            },
            {
              option:
                "Complain in a loud voice, while tapping your foot impatiently",
              value: 4,
            },
          ],
        },
        {
          question:
            "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          selectedAns: "",
          answers: [
            { option: "Don’t dare contradict them", value: 1 },
            { option: "Think that they are obviously right", value: 2 },
            {
              option: "Defend your own point of view, tooth and nail",
              value: 3,
            },
            { option: "Continuously interrupt your colleague", value: 4 },
          ],
        },
        {
          question: "You are taking part in a guided tour of a museum. You:",
          selectedAns: "",
          answers: [
            {
              option:
                "Are a bit too far towards the back so don’t really hear what the guide is saying",
              value: 1,
            },
            { option: "Follow the group without question", value: 2 },
            {
              option: "Make sure that everyone is able to hear properly",
              value: 3,
            },
            {
              option:
                "Are right up the front, adding your own comments in a loud voice",
              value: 4,
            },
          ],
        },
        {
          question:
            "During dinner parties at your home, you have a hard time with people who:",
          selectedAns: "",
          answers: [
            {
              option: "Ask you to tell a story in front of everyone else",
              value: 1,
            },
            { option: "Talk privately between themselves", value: 2 },
            { option: "Hang around you all evening", value: 3 },
            {
              option: "Always drag the conversation back to themselves",
              value: 4,
            },
          ],
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
    gettingValue() {
      //  enable next button
      this.disabled = false;
      console.log(this.questions[this.index].selectedAns);
    },
    nextFunc() {
      // console.log(this.ValueArray);
      // next step
      if (this.e1 < this.questions.length) {
        this.e1++;
      }

      this.disabled = true;
      this.ValueArray.push(this.selectedAnswer);
    },
    finishFunc() {
      // finish button
      for (let i = 0; i < this.questions.length; i++) {
        this.result = this.result + this.questions[i].selectedAns;
      }
      console.log(this.result);
      if (this.result > 15) {
        alert("you're extrovert ");
      } else {
        alert("you're introvert");
      }
    },
  },
};
</script>

<style>
body {
  background-color: #7b3aec;
}
.v-application {
  background-color: #7b3aec;
}
.v-main {
  background-color: #7b3aec;
}
.text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.v-stepper {
  background-color: #7b3aec;
}
.v-main__wrap {
  background-color: #7b3aec;
}
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: 0 0 0 0 transparent !important;
}
.v-stepper__content {
  /* box shadow transparent */
  box-shadow: 0 0 0 0 transparent !important;
}
.v-btn {
  color: #fff !important;
}
.radioStyle {
  margin-right: 10px;
  font-size: 21rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  accent-color: #7b3aec;
  margin-top: 0.5rem;
}
label {
  font-size: 1.2rem;
}
.heading-style {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
}
.CusStyle {
  background-color: white !important;
  box-shadow: 0 0 0 0 transparent !important;
  margin: 20vh auto;
  width: 60%;
}
</style>
