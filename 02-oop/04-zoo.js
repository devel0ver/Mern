// You’ll design a system that models different animal types and lets you interact with them using classes, inheritance, and methods.

class Animal{
    constructor(nameInput, speciesInput, ageInput){
        this.name = nameInput;
        this.species = speciesInput;
        this.age = ageInput;
        this.energy = 100;
        this.happiness = 50;
    }

    eat(){
        this.energy += 10;
    }

    sleep(){
        this.energy += 10;
        this.happiness += 15;
    }

    displayStats(){
        console.log(`Animal's Info: \nName: ${this.name} \nSpecies: ${this.species} \nAge: ${this.age} \nEnergy: ${this.energy} \nHappiness: ${this.happiness}`)
    }
}

// let animal1 = new Animal('Leo', 'Lion', 5)
// animal1.eat();
// animal1.displayStats()

class Lion extends Animal{
    constructor(nameInput, speciesInput, ageInput, maneSizeInput){
        super(nameInput, speciesInput, ageInput); 
        this.maneSize = maneSizeInput; //(in inches)
    }

    roar(){
        console.log("ROAAAR!!");
        this.energy -= 10;
    }

    hunt(){
        this.energy -= 10; 
        this.happiness += 15;
    }
}

class Monkey extends Animal{
    constructor(nameInput, speciesInput, ageInput, favoriteFoodInput){
        super(nameInput, speciesInput, ageInput);
        this.favoriteFood = favoriteFoodInput;
    }

    play(){
        this.energy -= 10;
        this.happiness += 15;
    }

    throwBanana(){
        console.log('Take this!!');
        this.happiness += 5;
    }
}


class Elephant extends Animal{
    constructor(nameInput, speciesInput, ageInput, trunkLengthInput){
        super(nameInput, speciesInput, ageInput);
        this.trunkLength = trunkLengthInput;
    }

    sprayWater(){
        console.log("Splashes water everywhere!");
        this.happiness += 15;
    }

    eatLeaves(){
        this.energy += 10;
    }
}


let simba = new Lion("Simba", "Lion", 5, 12);
let george = new Monkey("George", "Monkey", 3, "Bananas"); 
let dumbo = new Elephant("Dumbo", "Elephant", 8, 6);

george.play();
george.throwBanana();
george.displayStats();

