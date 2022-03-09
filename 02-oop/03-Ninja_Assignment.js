
// create a ninja class
class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }                       

    sayName(){
        console.log(`Name: ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name} \nHealth: ${this.health} \nSpeed: ${this.speed} \nStrength: ${this.strength}`  )
    }

    drinkSake(){
        this.health += 10;
    }
}