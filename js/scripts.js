// Takes string and returns first and last letters
var firstLast = function(string){
  return string.charAt(0).toUpperCase() + string.charAt(string.length - 1).toUpperCase();
};

// Reverses a string, returns result
var reverseString = function(string){
    return string.split("").reverse().join("");
};

// Returns char at the index equal to half the string's length (rounded down)
var getMiddleLetter = function(string) {
  return string.charAt(parseInt(string.length / 2));
};

// "Encodes" a string via the following steps:
// 1) Takes first and last letters, capitalizes, concatenates and reverses
// 2) Finds middle letter
// 3) Adds middle letter to front of string, first&last to end, and reverses
var encode = function(string) {
  var lastFirst = reverseString(firstLast(string));
  var middle = getMiddleLetter(string);
  var newString = middle + string + lastFirst;
  return reverseString(newString);
};

// Decodes the "Encoded" string
var decode = function(string) {
  string = string.substring(2, string.length - 1)
  return reverseString(string);
};

$(document).ready(function() {
  // Toggle event for example
  $("p.clickable").click(function() {
    $(".original").toggle();
    $(".result").toggle();
  });

  // Handles submission of cipher form
  $("#cipher").submit(function(event) {
    var sentence = $("input#sentence").val();
    var todo = $("input:radio[name=todo]:checked").val();
    var result;
    if (todo === "encode") {
      result = encode(sentence);
    } else {
      result = decode(sentence);
    }
    $("input#sentence").val(result);
    event.preventDefault();
  });
});
