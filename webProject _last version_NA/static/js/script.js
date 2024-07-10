const container = document.querySelector(".container2");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie2");

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}


// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex)
  }
}
console.log(populateUI())
// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM content to load before executing JavaScript

  // Selecting the arrow icons
  const arrows = document.querySelectorAll(".arrow");

  // Selecting the movie list wrappers
  const movieListWrappers = document.querySelectorAll(".movie-list-wrapper");

  // Adding click event listeners to the arrow icons
  arrows.forEach(function(arrow, index) {
      arrow.addEventListener("click", function() {
          // Checking which arrow was clicked
          if (arrow.classList.contains("fa-chevron-left")) {
              // If left arrow is clicked, move to the previous movie list
              moveMovieList(index, -1);
          } else if (arrow.classList.contains("fa-chevron-right")) {
              // If right arrow is clicked, move to the next movie list
              moveMovieList(index, 1);
          }
      });
  });

  // Function to move to the previous or next movie list
  function moveMovieList(index, direction) {
      // Get the current active movie list
      const currentList = movieListWrappers[index];

      // Hide the current list
      currentList.style.display = "none";

      // Calculate the index of the next movie list
      const nextIndex = (index + direction + movieListWrappers.length) % movieListWrappers.length;

      // Get the next movie list
      const nextList = movieListWrappers[nextIndex];

      // Show the next list
      nextList.style.display = "block";
  }
});

////////////////////////////////////////////////////////////////
function redirectTo(select) {
  var url = select.value;
  window.location.href = url;
}

///////////////////////////////////////////////////////////////////////////////

function toggle() {
  var blur = document.getElementById('movies');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function toggleEditButtons() {
  const buttons = document.querySelectorAll('.edit-delete-buttons');
  buttons.forEach(button => {
      button.style.display = button.style.display === 'none' ? 'block' : 'none';
  });
}
//////////////////////////////////////////Edit profile js ///////////////////////////

function openProfilePopup() {
  document.getElementById('popupProfile').style.display = 'block';
}

function closeProfilePopup() {
  document.getElementById('popupProfile').style.display = 'none';
}
