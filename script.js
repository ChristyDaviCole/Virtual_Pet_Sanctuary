/*
Phase 1: The Pet Blueprint
In this phase, you will establish the basic structure of your pet.

Requirements
Create a class called Pet.
The class should have a constructor that accepts and assigns two properties: name and type.
Add a method called describe() that returns a string like: “I am a [type] named [name].”
In your main script, instantiate two different pets using the new keyword and use console.log() to print the result of their describe() methods.

Phase 2: State and Static Interaction
Now, we will give your pet a “need” and connect the JavaScript logic to an HTML interface.

Requirements
Update the Pet class to include a hunger property in the constructor, initialized to 50.
Add a feed() method that decreases the hunger value by 10.
Create a basic HTML page with:
A <div> or <span> to display the pet’s current hunger.
A <button> labeled “Feed Pet”.
Write an event listener for the button that calls the pet’s feed() method and updates the HTML display to show the new hunger level.

Phase 3: The Pet Sanctuary (Dynamic UI)
Finally, you will transform your app from managing one pet to managing a whole sanctuary of pets.

Requirements
Create an “Add Pet” button and an input field for the pet’s name in your HTML.
Create a container element (like a <div>) where your pets will be listed.
Implement a function that:
Reads the name from the input field.
Instantiates a new Pet().
Dynamically creates a “Pet Card” (a new HTML element) containing the pet’s name and its own “Feed” button.
Appends this card to the sanctuary container.
Ensure that clicking a specific pet’s “Feed” button only updates the hunger for that specific pet instance.
*/

class Pet {

    constructor(name, type) {

        this.name = name;
        this.type = type;

        this.hunger = 50;

    }

    describe() {

        return `I am an ${this.type} named ${this.name}.`;

    }

    feed() {

        this.hunger = this.hunger - 10

    }

}

const pet1 = new Pet("Smokey", "apartment kitty");
const pet2 = new Pet("Peaches", "apartment kitty");

console.log(pet1.describe());
console.log(pet2.describe());

const hungerDisplay = document.getElementById("pet-hunger");
const feedButton = document.getElementById("feed-bttn");

feedButton.addEventListener("click", () => {

    pet1.feed();
    hungerDisplay.textContent = `Hunger = ${pet1.hunger}`;

});