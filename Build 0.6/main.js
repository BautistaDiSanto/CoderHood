//get modal elemnt
var modal = document.getElementById("simplemodal");
//get open modal button
var modalbtn = document.getElementById("modalbtn");
//get close button
var closebtn = document.getElementsByClassName("closebtn")[0];
//listen for click
modalbtn.addEventListener("click", openmodal);
//listen for click
closebtn.addEventListener("click", closemodal);
//listen for outside click
modal.addEventListener("click", outsideclick);
//function to open modal
function openmodal() {
  modal.style.display = "block";
}
//function to close modal
function closemodal() {
  modal.style.display = "none";
}
//function to close modal if outside click
function outsideclick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
