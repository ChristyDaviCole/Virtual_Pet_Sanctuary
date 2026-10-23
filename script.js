class Pet {

    constructor(name, type) {

        this.name = name;
        this.type = type;

    }

    describe() {

        return `I am an ${this.type} named ${this.name}.`;

    }

}

const pet1 = new Pet("Smokey gray", "apartment kitty");
const pet2 = new Pet("Peaches", "apartment kitty");

console.log(pet1.describe());
console.log(pet2.describe());