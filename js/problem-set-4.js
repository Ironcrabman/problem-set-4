/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
    var div=document.getElementById("output1");
    div.innerHTML="Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name=prompt("Enter your name")
  var div=document.getElementById("output2")
  div.innerHTML=("Hello, " + name + "!")


  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
var fahr=((cels * 9/5) + 32).toFixed(2);
var div =document.getElementById("output3")
div.innerHTML=(cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.")
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
var cels =((fahr - 32) * 5/9).toFixed(2);
var div =document.getElementById("output4")
div.innerHTML=(fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.")
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE

  let miles=Math.floor(inches/63360);
  inches=Math.floor(inches % 63360);
  let yards=Math.floor(inches/36);
  inches=Math.floor(inches % 36);
  let feet=Math.floor(inches/12);
  inches=Math.floor(inches % 12);
  var div =document.getElementById("output5")
  div.innerHTML=(`Miles: ${miles}</br>Yards: ${yards}</br>Feet: ${feet}</br>Inches: ${inches}`)

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilometers= Math.floor(centimeters / 100000)
  centimeters= Math.floor(centimeters % 100000)
  let meters= Math.floor(centimeters / 100)
  centimeters= Math.floor(centimeters % 100)
  let div = document.getElementById("output6")
  div.innerHTML=(`Kilometers: ${kilometers}</br>Meters: ${meters}</br>Centimeters: ${centimeters}`)

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallons= Math.floor(fluidOunces/128)
  fluidOunces= Math.floor(fluidOunces % 128)
  let quarts= Math.floor(fluidOunces/32)
  fluidOunces= Math.floor(fluidOunces % 32)
  let pints = Math.floor(fluidOunces / 16)
  fluidOunces= Math.floor(fluidOunces % 16)
  let cups= Math.floor(fluidOunces / 8)
  fluidOunces= Math.floor(fluidOunces % 8)
  let div = document.getElementById("output7")
  div.innerHTML=(`Gallons: ${gallons}</br>Quarts: ${quarts}</br>Pints: ${pints}</br>Cups: ${cups}</br>Fluid Ounces: ${fluidOunces}`)
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons= Math.floor(ounces / 32000)
  ounces= Math.floor(ounces % 32000)
  let pounds= Math.floor(ounces / 16)
  ounces= Math.floor(ounces % 16)
  let div = document.getElementById("output8")
  div.innerHTML=(`Tons: ${tons}</br>Pounds: ${pounds}</br>Ounces: ${ounces}`)
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollar=Math.floor(pennies/100);
  pennies=Math.floor(pennies % 100);
  let quarters=Math.floor(pennies/25);
  pennies=Math.floor(pennies % 25);
  let dimes=Math.floor(pennies/10);
  pennies=Math.floor(pennies % 10);
  let nickels=Math.floor(pennies/5);
  pennies=Math.floor(pennies % 5);
  var div =document.getElementById("output9")
  div.innerHTML=(`Dollars: ${dollar}</br>Quarters: ${quarters}</br>Dimes: ${dimes}</br>Nickels: ${nickels}</br>Pennies: ${pennies}`)


  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE

  amount=(amount*100)
  let quarters=Math.floor(amount/25);
  amount=(amount % 25);
  let dimes=Math.floor(amount/10);
  amount=(amount % 10);
  let nickels=Math.floor(amount/5);
  let pennies = (amount % 5);
  let coins=(quarters + dimes + nickels + pennies).toFixed(0);
  let word = coins;
if(word>1) {
  word= `coins.`
}
else {
  word = `coin.`
}
  var div =document.getElementById("output10")
  div.innerHTML=(`${coins} ${word}`)



  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
