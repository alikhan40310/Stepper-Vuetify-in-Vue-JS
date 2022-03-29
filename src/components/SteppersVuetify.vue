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
        <h2 class="gradient-color">Question {{ index + 1 }}</h2>

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
        <div class="btnStyle">
          <v-btn
            class="mt-4 mr-4"
            color="white"
            text
            @click="backFunc"
            v-if="index !== 0"
          >
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
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { allQuestions } from "../constants/data";
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
      questions: allQuestions,
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
      // if the result is greater than or equal to 15 then it's extrovert
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
  background-image: linear-gradient(320deg, #e47b3a 10%, #e94057 40%, #8a2387 80%);

}
.v-application {
  background-color: transparent !important;
}
.v-main {
  background-color: transparent !important;
}
.text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}
.v-stepper {
  background-color: transparent !important;
}
.v-main__wrap {
  background-color: transparent !important;
}
.btnStyle {
  /* position: absolute; */
  /* top: 20rem; */
  /* background-color: #fff; */
}
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: 0 0 0 0 transparent !important;
  background-color: transparent !important;

  background-size: cover;
  border-radius: 1rem;
}
.v-stepper__content {
  color: white;
  /* background-image: linear-gradient(320deg, #f27121, #e94057, #8a2387); */
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(10px) saturate(150%) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  margin-top: 2rem;
  width: 1vw;

}
.v-stepper__items{
  width:100%;
}
.v-stepper__header {
  box-shadow: 0 0 0 0 transparent !important;
  color: #fff !important;
}
.v-stepper__label {
  color: #fff !important;
  font-size: 1.5rem;
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
  margin-top: 1rem;
  margin-bottom: 1.4rem;
}
.CusStyle {
  background-color: white !important;
  box-shadow: 0 0 0 0 transparent !important;
  margin: 20vh auto;
  width: 70%;
}
.gradient-color {
  /* background: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%); */
  /* background-color: #fce043; */
  /* add new gradiant color */
  /* background-image: linear-gradient(315deg, #fce043 10%, rgb(112, 134, 228) 74%); */
  background-clip: border-box;
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  color: white;
}
</style>
