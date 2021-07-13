



class Ninja {
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;

    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Ninjas name: ${this.name} and  Ninjas health ${this.health} and Ninjas speed: ${this.speed} and Ninjas Strength: ${this.strength} wisdom is ${this.wisdom}`);
    }
    drinkSake(){
        this.health=this.health+10;
    }
}

// const ninja1 = new Ninja("Hyabusa",4);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja{
    constructor(name,health){
        super(name); 
        this.health=health; 
        this.speed=10;
        this.strength=10;
        this.wisdom =10;
    
    }
          speakWisdom(){
        super.drinkSake();
        console.log("hiaaaaaaaaah,hahahahaha");
    }
  
    }
    
const superSensei = new Sensei("Master Splinter",200);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"