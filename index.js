// Function to greet the user based on the number of feet
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';  // Corrected message
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';  // Corrected message
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';  // Corrected message
  } else {
    return 'No can do.';  // Corrected message
  }
}

// Function to check the destination city
function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not generous" || tip === "cheap" || tip === "not as generous") {
    return "Thank you.";  // Added condition to handle "not as generous"
  } else {
    return "Bye."; 
  }
}


console.log(switchOnCharmFromTip("not generous"));  // Expected: "Thank you."
console.log(switchOnCharmFromTip("cheap"));         // Expected: "Thank you."
console.log(switchOnCharmFromTip("generous"));     // Expected: "Thank you so much."
console.log(switchOnCharmFromTip("other"));        // Expected: "Bye."
