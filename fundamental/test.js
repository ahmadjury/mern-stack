class vhicle {
    constructor(color,bolor){
        this.color=color;
        this.miles=0;
        this.bolor=bolor; 
    }
    venn(){
        this.miles+=10;
    }
}

const car = new vhicle("red","shosho");
car.venn();
car.venn();
console.log(car);

class M1 extends vhicle{
    constructor(color){
        super(color,"hoho")
    }
}

const m1 =new M1 ("red");
m1.venn();
m1.venn();
console.log(m1);