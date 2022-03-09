

class Athlete{
    
    constructor(nameInput, speedInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = speedInput;
        this.strength = 70;
    }
    completeEvent(){
        this.health -= 10
    }

    displayStats(){
        // console.log("Athlete info: \n Name: " + this.name + "\n Health: " + this.health)

        console.log(`Athlete info: \nName: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed}`)
    }

    takeIceBbath(){
        this.health += 10;
    }
}

//instances of a class (you can also call them objects)
const athlete1 = new Athlete("Kobe", 88);
const athlete2 = new Athlete("Odell", 92);
const athlete3 = new Athlete("Bolt", 100);

// console.log(athlete1)
// console.log(athlete2)
// console.log(athlete3)

console.log("competitions in events are happening below!")
athlete1.completeEvent()
athlete1.completeEvent()
athlete1.displayStats()
athlete1.takeIceBbath()
athlete1.displayStats();


// console.log(athlete1.displayStats())
// console.log(athlete2.displayStats())
// console.log(athlete3.displayStats())