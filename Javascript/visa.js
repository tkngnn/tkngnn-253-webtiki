
var btnHide = document.getElementById("hidden");
var myDiv = document.getElementById("div-change");

// Bắt sự kiện click trên nút ẩn
btnHide.addEventListener("click", function() {
  // Ẩn div bằng cách đặt display = "none"
  myDiv.style.display = "block";
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var acc = document.getElementById("sub-title-link");
var panel = document.getElementById("header-sum-hidden");

  acc.addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
   

    /* Toggle between hiding and showing the active panel */
    
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

