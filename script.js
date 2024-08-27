$(window).load(function(){

	var body = $("body"),
		universe = $("#universe"),
		solarsys = $("#solar-system");
  
	var init = function() {
	  body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
		$(this).removeClass('hide-UI').addClass("set-speed");
		$(this).dequeue();
	  });
	};
  
	var setView = function(view) { universe.removeClass().addClass(view); };
  
	$("#toggle-data").click(function(e) {
	  body.toggleClass("data-open data-close");
	  e.preventDefault();
	});
  
	$("#toggle-controls").click(function(e) {
	  body.toggleClass("controls-open controls-close");
	  e.preventDefault();
	});
  
	$("#data a").click(function(e) {
	  var ref = $(this).attr("class");
	  solarsys.removeClass().addClass(ref);
	  $(this).parent().find('a').removeClass('active');
	  $(this).addClass('active');
	  e.preventDefault();
	});
  
	$(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
	$(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
	$(".set-speed").click(function() { setView("scale-stretched set-speed"); });
	$(".set-size").click(function() { setView("scale-s set-size"); });
	$(".set-distance").click(function() { setView("scale-d set-distance"); });
  
	init();
  
  });


  const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save the user's preference in local storage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Load the user's preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
});

let minValue = 1;
let maxValue = 100;
let targetNumber = generateRandomNumber(minValue, maxValue);
let attempts = 0;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    const guessInput = document.getElementById('guess-input');
    const messageElement = document.getElementById('message');
    const guess = parseInt(guessInput.value);
    
    attempts++;
    
    if (isNaN(guess)) {
        messageElement.textContent = 'Please enter a valid number.';
        return;
    }
    
    if (guess < minValue || guess > maxValue) {
        messageElement.textContent = `Guess must be between ${minValue} and ${maxValue}.`;
        return;
    }
    
    if (guess < targetNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else if (guess > targetNumber) {
        messageElement.textContent = 'Too high! Try again.';
    } else {
        messageElement.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        resetGame();
    }
}

function resetGame() {
    targetNumber = generateRandomNumber(minValue, maxValue);
    attempts = 0;
}

