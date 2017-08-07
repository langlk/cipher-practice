var firstlast = function(string){
  return string.charAt(0).toUpperCase() + string.charAt(string.length - 1).toUpperCase();
};

var reverseString = function(string){
    return string.split("").reverse().join("");
};

var reverseEnds = function(string){
  return string + reverseString(firstlast(string));
};

var getMiddleLetter = function(string) {
  return string.charAt(parseInt(string.length / 2));
};

$(document).ready(function() {
  $("p").click(function() {
    $(".original").toggle();
    $(".result").toggle();
  });
});
