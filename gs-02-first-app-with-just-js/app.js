Vue.createApp({
  data() {
    return {
      goals: [],
      enteredvalue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredvalue);
      this.enteredvalue = '';
    },
  }
}).mount('#app');;

// const button = document.querySelector('#button');
// const input = document.querySelector('#goal');
// const goals = document.querySelector('#goalList');

// function addGoal() {
//   const newGoal = input.value;
//   const li = document.createElement('li');
//   li.textContent = newGoal;

//   goals.appendChild(li);
// }

// button.addEventListener('click', addGoal);