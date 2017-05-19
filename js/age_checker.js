function checkIt() {
  // Initialize scores
  var four = 0;
  var seventeen = 0;
  var thirty = 0;
  var sixty = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {
    if (e.checked) {
      if (e.value == 'four') {
        four++;
      }
      else if (e.value == 'seventeen') {
        seventeen++;
      }
      else if (e.value == 'thirty') {
        thirty++;
      }
      else if (e.value == 'sixty') {
        sixty++;
      }
    }
  }

  // Determine result
  var counts = "Four: " + four + ", " +
               "Seventeen: " + seventeen  + ", " +
               "Thirty: " + thirty  + ", " +
               "sixty: " + sixty;

  // What is the highest value?
  var max = Math.max(four, seventeen, thirty, sixty);

  // Form a message
  var message;

  if (max == four) {
    message = "Aww. Looks like you haven't matured much! You're 4 years old, still in kindergarten.";

  }
  else if (max == seventeen) {
    message = "You're the typical high schooler. If I had to guess, you're 17 years old!";
  }
  else if (max == thirty) {
    message = "You've gotten your life together. You're responsible and put together, but you aren't the go to person your friends invite to a party. You're 30 years old.";
  }
  else if (max == sixty) {
    message = "Hey grandma. You're pretty old...I'd have to go with 60 years old.";
  }

  var result-text;

  if (max==four) {
    result h3 = "You're Four!";

  }

  // Display result
  ///document.getElementById('result').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
