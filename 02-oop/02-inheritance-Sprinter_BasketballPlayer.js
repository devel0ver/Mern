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

//creating sub classes below
class Sprinter extends Athlete{
    //give the sprinter its own constructor IF the sprinter needs to have more attributes than just the ones that it inherited from Athlete
    constructor(nameInput, speedInput, personal100MrecordInput){
        super(nameInput, speedInput) // super means --> run the constructor of the parent class

        //personal100m record is a specific property only for sprinters
        this.personal100Mrecord = personal100MrecordInput;
    }

    sprint(){
        console.log("Woooosh! Sprinting! yay")
        this.health -= 20;
    }
}

// let sprinter1 = new Sprinter("Usain Bolt", 100, 9.9)

// sprinter1.completeEvent()
// sprinter1.sprint()
// sprinter1.displayStats()

class Baller extends Athlete{
    constructor(nameInput, speedInput, verticalJumpHeightInput){
        super(nameInput, speedInput)

        this.verticalJumpHeight = verticalJumpHeightInput
    }
    
    slamDunk(){
        if(this.verticalJumpHeight < 20){
            console.log("thats a layup tho")
            this.health -= 5
        }else{
            console.log("slammmm dunkkkk!!")
            this.health -= 15
        }
    }
}

let baller1 = new Baller("Lebron James", 88, 42)

console.log(baller1)
baller1.slamDunk()
baller1.displayStats()