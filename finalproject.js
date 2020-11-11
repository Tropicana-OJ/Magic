var jokeDiv;

//service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}      

// initialize variables after page loads
window.onload = function() {
  jokeDiv  = document.getElementById("card");
} // window.onload


// get activity from bored api
function fetchCard() {
  fetch('https://api.scryfall.com/cards/random')
    .then(response => response.json())
    .then(data => changeCard(data) 
    );
} // window.onload 
 

// change the activity displayed 
function changeCard(data) {
  console.log(data); 
	 jokeDiv.innerHTML = "<h2>" + data.name + "</h2>" + "Artist: " +  data.artist + "<br>" + "Color: " + data.colors + "<br>" + "Mana Cost: " +  data.mana_cost + "<br>" + "Power And Toughness: " + data.power + "/" + data.toughness; 

} 