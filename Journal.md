Journal Prompt 1:
What did you accomplish in this phase? 
I created a Pet class that has a constructor that accepts and assigns name and type as properties. I declared a method called describe which returns a string that says what type a pet is and what it's named. Then I instantiated 2 new pets and printed the result of their describe() methods.
In your own words, what is the difference between the Pet class itself and an “instance” of that class?
The pet class is a plan or template for creating a new pet object. An instance is the object itself.

Journal Prompt 2:
What was the process of connecting your JavaScript class method to an HTML button? 
I used getElementById calls to target the feed button and hunger display, used addEventListener to run the feed method after a click event, then called the feed method on pet1 & updated its hunger display with .textContent.
What part of the DOM manipulation felt most intuitive, and what part was confusing?
The part that felt most intuitive was using document.getElementById() to select the hunger display and Feed Pet button. The part that was confusing was the addEventListener() function and how to connect the button click to the feed() method and update the hunger display using .textContent.