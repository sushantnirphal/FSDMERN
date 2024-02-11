class Laptop{
    constructor(ram,processor,generation){
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

    displayMsg(){
        console.log(
            ` Laptop Spec :: RAM ${this.ram} - Processor ${this.processor} - gen ${this.generation} price -${this.price} - model - ${this.model}
            `
        );
    }
}

class Dell  extends Laptop{
    constructor(ram,processor,generation,price , model){
        super(ram,processor,generation);
        this.price = price;
        this.model = model;
    }
}

const dell1 = new Dell("8GB","intel","i5","50000RS","Precsion");
console.log(dell1);
dell1.displayMsg();

class HP extends Laptop{
    constructor(ram,processor,generation,price , model){
        super(ram,processor,generation);
        this.price = price;
        this.model = model;
    }

    displayMsg(){
        console.log(
            ` Laptop Spec :: RAM ${this.ram} - Processor ${this.processor} - gen ${this.generation} price -${this.price} - model - ${this.model}
            `
        );
    }

}

const hp = new HP("16GB","intel","i7","75000RS", "Pavilion");
console.log(hp);
console.log(hp.displayMsg());