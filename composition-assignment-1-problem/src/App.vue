<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalData.showGoal">{{ goalData.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="goalData.toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    // ALL REFS
    // const courseGoal = ref('Kick ass');
    // const showGoal = ref(true);

    // function toggleShowGoal() {
    //   showGoal.value = !showGoal.value;
    // }

    // return {
    //   goal: courseGoal,
    //   show: showGoal,
    //   toggleGoal: toggleShowGoal,
    // };

    // REF OBJECT
    // const data = ref({
    //   goal: 'Kick ass',
    //   showGoal: true,
    //   toggleGoal() {
    //     this.showGoal = !this.showGoal;
    //   },
    // });

    // console.log(data.value);

    // return {
    //   goalData: data.value,
    // };

    // REACTIVE OBJECT
    const data = reactive({
      goal: 'Kick ass',
      showGoal: true,
      toggleGoal() {
        this.showGoal = !this.showGoal;
      },
    });

    console.log(data);

    return {
      goalData: data,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
