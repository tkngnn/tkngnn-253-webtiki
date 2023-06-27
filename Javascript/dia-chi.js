//ẩn nút 1
var btnHide1 = document.getElementById("hidden");
var myDiv = document.getElementById("div-change");

// Bắt sự kiện click trên nút ẩn
btnHide1.addEventListener("click", function() {
  // Ẩn div bằng cách đặt display = "none"
  myDiv.style.display = "none";
});

//ẩn nút 2
var btnHide2 = document.getElementById("hidden-up");
var myDiv = document.getElementById("div-change");

// Bắt sự kiện click trên nút ẩn
btnHide2.addEventListener("click", function() {
  // Ẩn div bằng cách đặt display = "none"
  myDiv.style.display = "none";
});

//hiện nút
var btnHide3 = document.getElementById("unhidden");
var myDiv = document.getElementById("div-change");

// Bắt sự kiện click trên nút hiện
btnHide3.addEventListener("click", function() {
  // Ẩn div bằng cách đặt display = "block"
  myDiv.style.display = "block";
});