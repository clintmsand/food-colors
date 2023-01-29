// Set up the vue instance

new Vue({
  el: '#app',
  data: {
    title: 'Food Color Calculator',
    weight: '',
    color: '',
    calories: '',
    foodType: 'solid',
    score: 0,
    calorieError: false,
    weightError: false,
    continue: true,
    
  },

  methods: {
    calculateColor: function() {
      
      let numbers = /^[0-9]+$/;
      
      if ((this.calories.match(numbers)) && (this.calories != 0)) {
        this.calorieError = false;
        this.color = '';
      } else {
        this.calorieError = true;
        this.color = 'Error';
      } 
      
      if ((this.weight.match(numbers)) && (this.weight != 0)) {
        this.weightError = false;
        this.color = '';
      } else {
        this.weightError = true;
        this.color = 'Error';
      }

      if ((this.weightError == true) || (this.calorieError == true)) {
        this.continue = false;
        this.color = '';
      } else {
        this.continue = true;
      }
      
      if (this.continue) {
       
        this.score = (this.calories/this.weight);
        console.log('CD is '+this.score);
        if (this.foodType == 'liquid') {
          if (this.score <= .4) {
            this.color = 'Green';
          } else if (this.score > .5) {
            this.color = 'Orange';
          } else {
            this.color = 'Yellow';
          } 
        } else if (this.foodType == 'soupSauceSpread') {
            if (this.score <= .5) {
              this.color = 'Green';
            } else if (this.score > 1.0) {
              this.color = 'Orange';
            } else {
              this.color = 'Yellow';
            }
        } else if (this.foodType == 'solid') {
          if (this.score <= 1) {
            this.color = 'Green';
          } else if (this.score > 2.4) {
            this.color = 'Orange';
          } else {
            this.color = 'Yellow';
          }
        }
      }
      
      
    },

	}
})