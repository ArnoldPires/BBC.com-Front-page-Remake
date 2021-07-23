// NavBar
function myFunction() {
  let navy = document.getElementById("myTopnav");
  if (navy.className === "topnav") {
    navy.className += " responsive";
  } else {
    navy.className = "topnav";
  }
}
// Date
document.getElementById("date").innerHTML = formatAMPM();
function formatAMPM() {
var d = new Date(),
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+', '+d.getDate()+' ' +months[d.getMonth()];
}