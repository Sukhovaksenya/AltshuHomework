let tamagotchi = {
 hamster: {
  name: 'Ceaser',
  meal: 5,
  energy: 5,
  mood: 5,
  },
  getStatus: function(){
   
  if (this.hamster.meal < 3){
  console.log(`Я голоден (${this.hamster.meal})`);
  }else{
  console.log(`Я не голоден (${this.hamster.meal})`);
  };
  
  if (this.hamster.energy < 3){
  console.log(`Я хочу спать (${this.hamster.energy})`);
  }else{
  console.log(`Я не хочу спать (${this.hamster.energy})`);
  };
  
  if (this.hamster.mood < 3){
  console.log(`Мне скучно (${this.hamster.mood})`);
  }else{
  console.log(`Мне весело (${this.hamster.mood})`);
  };
  if(this.hamster.meal <= 0 || this.hamster.energy <= 0 || this.hamster.mood <= 0){
    console.log( `${this.hamster.name} умер`);
    } else {
    console.log( `${this.hamster.name}`);}
  },

  setName: function (newName) {
    this.name = newName;
  },

  eat: function () {
    if (this.hamster.meal > 0 && this.hamster.meal < 5) {
      this.hamster.meal++;
    }
    this.hamster.mood--;
  },
  sleep: function () {
    if (this.hamster.energy > 0 && this.hamster.energy < 5) {
      this.hamster.energy++;
    }
    this.hamster.meal--;
  },
  play: function () {
    if (this.hamster.mood > 0 && this.hamster.mood < 5) {
      this.hamster.mood++;
    }
    this.hamster.energy--;
  },
  }
  
  tamagotchi.getStatus();
  
    