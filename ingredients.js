const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let j = 0; //initialize j
while (j < ingredients.length){ //setting the condition to run the while loop
console.log(ingredients[j]);
j++; //adds 1 each time so the loop doesn't go infinite and crash on me like the first time I tried this and forgot to add it :-)
}

for (var i = 0 ; i < ingredients.length ; i++){ //first we initialize i, give the conditions, give what happens after the for loop finishes
  console.log(ingredients[i]);
}

for (v = 0 ; v < 1 ; v++){ //for loop to loop one time
  console.log(ingredients.reverse()); //list everything in array in reverse
}