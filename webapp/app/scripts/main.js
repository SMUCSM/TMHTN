console.log('\'Allo \'Allo!');

// Create a click event using jQuery
var $p = $('p.lead');
var $continueBtn = $('a.continue');
var i = 0; // Click counter

$continueBtn.on('click', function(event) {
  console.log("Click event received!");
  i++; // i += 1; i = i + 1;
  p.text("I have been clicked "+i+" times.");
});

var $submitBtn = $('button.get-file-contents-btn');
var $filename = $('input[name="filename"]');
$submitBtn.on('click', function(event) {
  console.log($filename.val());
});