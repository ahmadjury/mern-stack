class Card{
    constructor(name,cost){
        this.name = name; 
        this.cost = cost;

    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power; 
        this.res=res;
    }
        attack(target){
            target.res = target.res - this.power;
        }
        showStats(){
            console.log(` Name: ${this.name} Cost: ${this.cost} Power: ${this.power} Res: ${this.res}`);
        }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;

       
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res=target.res+this.magnitude;
            }else if(this.stat=="power"){
                target.power=target.power+this.magnitude;
            }
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    showStats(){
        console.log(`${this.name}  ${this.cost}  ${this.text} ${this.stat} ${this.magnitude}`);
    }
}


const card1  = new Unit ("Red Belt Ninja",3,3,4);
const card2  = new Unit ("Black Belt Ninja",4,5,4);

const effect1  = new Effect ("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const effect2  = new Effect ("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-3);
const effect3 = new Effect ("Pair Programming",3,"	increase target's power by 2","power",+3);

card1.attack(card2);
effect1.play(card1);
effect3.play(card1);
card1.showStats();
card2.showStats();
effect1.showStats();
effect2.showStats();
effect3.showStats();

